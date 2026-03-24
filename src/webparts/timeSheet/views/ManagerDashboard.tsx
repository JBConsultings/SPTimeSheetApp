import * as React from "react";
import { useContext, useState, useEffect } from "react";
import {
  Modal,
  IconButton,
  PrimaryButton,
  DefaultButton,
  TextField,
  Spinner,
  SpinnerSize,
} from "@fluentui/react";
import { AppContext } from "../context/AppContext";
import {
  ITimesheetEntry,
  ITeamTimesheetRow,
  TimesheetStatus,
} from "../models/ITimesheetModels";
import {
  getTeamEntries,
  approveDayEntries,
  rejectDayEntries,
} from "../services/TimesheetService";
import {
  formatDateLabel,
  currentMonthRange,
  formatDateShort,
} from "../utils/dateUtils";
import { fmt } from "../utils/fmt";
import { REGULAR_HOURS_PER_DAY } from "../utils/constants";
import * as strings from "TimeSheetWebPartStrings";
import styles from "./ManagerDashboard.module.scss";

// ─── Constants ────────────────────────────────────────────────────────────────
function getStatusOptions() {
  return [
    { key: "Submitted", text: strings.StatusSubmitted },
    { key: "Approved", text: strings.StatusApproved },
    { key: "Rejected", text: strings.StatusRejected },
    { key: "All", text: strings.AllStatuses },
  ];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function badgeClass(status: TimesheetStatus): string {
  if (status === "Approved") return styles.approved;
  if (status === "Submitted") return styles.submitted;
  if (status === "Rejected") return styles.rejected;
  return styles.draft;
}

function toDateInputValue(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function fromDateInputValue(v: string): Date {
  const [y, m, d] = v.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  date.setHours(0, 0, 0, 0);
  return date;
}

function rowKey(row: ITeamTimesheetRow): string {
  return `${row.employeeEmail}__${row.entryDate.toISOString().split("T")[0]}`;
}

function groupToTeamRows(entries: ITimesheetEntry[]): ITeamTimesheetRow[] {
  const map = new Map<string, ITimesheetEntry[]>();
  entries.forEach((e) => {
    const key = `${e.employeeEmail}__${e.entryDate.toISOString().split("T")[0]}`;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(e);
  });

  return Array.from(map.values()).map((group) => ({
    employeeEmail: group[0].employeeEmail,
    employeeName: group[0].employeeName,
    entryDate: group[0].entryDate,
    entries: group,
    totalHours: group.reduce((s, e) => s + e.hoursSpent, 0),
    status: group[0].status,
  }));
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconHome = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z" />
  </svg>
);

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path
      d="M2 7l4 4 6-6"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconReject = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path
      d="M2 2l10 10M12 2L2 12"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const IconRefresh = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path
      d="M12 7A5 5 0 112 7"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M12 3v4h-4"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconSuccess = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <circle
      cx="8"
      cy="8"
      r="7"
      stroke="currentColor"
      strokeWidth="1.3"
      fill="none"
    />
    <path
      d="M4.5 8l2.5 2.5 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconError = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <circle
      cx="8"
      cy="8"
      r="7"
      stroke="currentColor"
      strokeWidth="1.3"
      fill="none"
    />
    <path
      d="M8 4v4M8 10v1"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const IconClose = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
    <path
      d="M1 1l10 10M11 1L1 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const IconUsers = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="18" cy="18" r="7" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="32" cy="18" r="7" stroke="currentColor" strokeWidth="2.5" />
    <path
      d="M4 40c0-7.732 6.268-14 14-14h2"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M24 40c0-7.732 6.268-14 14-14"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// ─── Shared Fluent UI button styles (theme colour) ────────────────────────────
const primaryBtnStyles = {
  root:         { backgroundColor: '#667eea', borderColor: '#667eea', borderRadius: 6 },
  rootHovered:  { backgroundColor: '#5a6fd6', borderColor: '#5a6fd6' },
  rootPressed:  { backgroundColor: '#4d5fbc', borderColor: '#4d5fbc' },
  rootDisabled: { backgroundColor: '#c5cbf8', borderColor: '#c5cbf8' },
};

const defaultBtnStyles = {
  root:        { borderRadius: 6 },
  rootHovered: { borderColor: '#667eea', color: '#667eea' },
  rootPressed: { borderColor: '#5a6fd6', color: '#5a6fd6' },
};

// ─── Component ────────────────────────────────────────────────────────────────
const ManagerDashboard: React.FC = () => {
  const { currentUser, navigateHome } = useContext(AppContext);

  const { start: wStart, end: wEnd } = currentMonthRange();
  const [startDate, setStartDate] = useState<Date>(wStart);
  const [endDate, setEndDate] = useState<Date>(wEnd);
  const [statusFilter, setStatusFilter] = useState<string>("Submitted");
  const [employeeFilter, setEmployeeFilter] = useState<string>("");

  const [rows, setRows] = useState<ITeamTimesheetRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Review modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [reviewRow, setReviewRow] = useState<ITeamTimesheetRow | null>(null);
  const [reviewAction, setReviewAction] = useState<
    "approve" | "reject" | "resubmit" | null
  >(null);
  const [managerComment, setManagerComment] = useState("");
  const [actionLoading, setActionLoading] = useState(false);

  // Bulk selection state
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [bulkModalOpen, setBulkModalOpen] = useState(false);
  const [bulkAction, setBulkAction] = useState<"approve" | "reject" | null>(
    null,
  );
  const [bulkComment, setBulkComment] = useState("");
  const [bulkLoading, setBulkLoading] = useState(false);

  // ─── Load data ────────────────────────────────────────────────────────────
  const loadData = (): void => {
    setLoading(true);
    setError("");
    const opts = {
      employeeEmail: employeeFilter || undefined,
      status:
        statusFilter === "All" ? undefined : (statusFilter as TimesheetStatus),
    };

    getTeamEntries(startDate, endDate, opts)
      .then((entries) => {
        setRows(groupToTeamRows(entries));
        setLoading(false);
      })
      .catch(() => {
        setError(strings.LoadTeamFailed);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadData();
  }, [startDate, endDate, statusFilter, employeeFilter]); // eslint-disable-line

  // ─── Bulk selection helpers ────────────────────────────────────────────────
  const submittedRows = rows.filter((r) => r.status === "Submitted");
  const allSelected =
    submittedRows.length > 0 &&
    submittedRows.every((r) => selectedKeys.indexOf(rowKey(r)) !== -1);
  const someSelected = selectedKeys.length > 0;

  const toggleRow = (key: string): void => {
    setSelectedKeys((prev) =>
      prev.indexOf(key) !== -1 ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  const toggleAll = (): void => {
    if (allSelected) {
      setSelectedKeys([]);
    } else {
      setSelectedKeys(submittedRows.map(rowKey));
    }
  };

  const openBulkModal = (action: "approve" | "reject"): void => {
    setBulkAction(action);
    setBulkComment("");
    setBulkModalOpen(true);
  };

  const handleBulkAction = async (): Promise<void> => {
    if (!bulkAction) return;
    if (bulkAction === "reject" && !bulkComment.trim()) return;
    const selected = rows.filter((r) => selectedKeys.indexOf(rowKey(r)) !== -1);
    setBulkLoading(true);
    try {
      if (bulkAction === "approve") {
        await Promise.all(
          selected.map((r) =>
            approveDayEntries(
              r.entries.map((e) => e.id as number),
              currentUser.displayName,
            ),
          ),
        );
        setSuccessMessage(
          `Approved ${selected.length} timesheet${selected.length !== 1 ? "s" : ""}.`,
        );
      } else {
        await Promise.all(
          selected.map((r) =>
            rejectDayEntries(
              r.entries.map((e) => e.id as number),
              currentUser.displayName,
              bulkComment,
            ),
          ),
        );
        setSuccessMessage(
          `Rejected ${selected.length} timesheet${selected.length !== 1 ? "s" : ""}.`,
        );
      }
      setSelectedKeys([]);
      setBulkComment("");
      setBulkModalOpen(false);
      loadData();
    } catch {
      setError("Bulk action failed. Please try again.");
    } finally {
      setBulkLoading(false);
    }
  };

  // ─── Modal helpers ────────────────────────────────────────────────────────
  const openModal = (
    row: ITeamTimesheetRow,
    action: "approve" | "reject" | "resubmit",
  ): void => {
    setReviewRow(row);
    setReviewAction(action);
    setManagerComment("");
    setModalOpen(true);
  };

  const closeModal = (): void => {
    if (actionLoading) return;
    setModalOpen(false);
  };

  const handleAction = async (): Promise<void> => {
    if (!reviewRow || !reviewAction) return;
    const ids = reviewRow.entries.map((e) => e.id as number);
    setActionLoading(true);
    try {
      if (reviewAction === "approve") {
        await approveDayEntries(ids, currentUser.displayName);
        setSuccessMessage(
          fmt(strings.ApprovedMsg, {
            name: reviewRow.employeeName,
            date: formatDateShort(reviewRow.entryDate),
          }),
        );
      } else {
        await rejectDayEntries(ids, currentUser.displayName, managerComment);
        const msg =
          reviewAction === "resubmit"
            ? strings.ResubmitMsg
            : strings.RejectedMsg;
        setSuccessMessage(fmt(msg, { name: reviewRow.employeeName }));
      }
      setModalOpen(false);
      loadData();
    } catch {
      setError("Action failed. Please try again.");
    } finally {
      setActionLoading(false);
    }
  };

  const modalTitle =
    reviewAction === "approve"
      ? strings.ApproveModal
      : reviewAction === "resubmit"
        ? strings.RequestResubmitModal
        : strings.RejectModal;

  const confirmBtnLabel =
    reviewAction === "approve"
      ? strings.ConfirmApprove
      : reviewAction === "resubmit"
        ? strings.SendResubmit
        : strings.ConfirmReject;

  const confirmDisabled =
    actionLoading || (reviewAction !== "approve" && !managerComment.trim());

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.homeBtn} title="Home" onClick={navigateHome}>
          <IconHome />
        </button>
        <h1 className={styles.title}>{strings.TeamTimesheetsTitle}</h1>
      </div>

      {/* Filter bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <label htmlFor="mgr-from">{strings.From}</label>
          <input
            id="mgr-from"
            type="date"
            className={styles.filterInput}
            value={toDateInputValue(startDate)}
            onChange={(e) =>
              e.target.value && setStartDate(fromDateInputValue(e.target.value))
            }
          />
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="mgr-to">{strings.To}</label>
          <input
            id="mgr-to"
            type="date"
            className={styles.filterInput}
            value={toDateInputValue(endDate)}
            onChange={(e) =>
              e.target.value && setEndDate(fromDateInputValue(e.target.value))
            }
          />
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="mgr-status">{strings.Status}</label>
          <select
            id="mgr-status"
            className={styles.filterSelect}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {getStatusOptions().map((o) => (
              <option key={o.key} value={o.key}>
                {o.text}
              </option>
            ))}
          </select>
        </div>

        <div className={`${styles.filterGroup} ${styles.filterGroupWide}`}>
          <label htmlFor="mgr-employee">{strings.EmployeeEmail}</label>
          <input
            id="mgr-employee"
            type="text"
            className={styles.filterInput}
            value={employeeFilter}
            onChange={(e) => setEmployeeFilter(e.target.value)}
            placeholder={strings.FilterByEmail}
          />
        </div>
      </div>

      {/* Messages */}
      {successMessage && (
        <div className={`${styles.messageBar} ${styles.success}`}>
          <IconSuccess />
          <span>{successMessage}</span>
          <button
            className={styles.dismissBtn}
            onClick={() => setSuccessMessage("")}
          >
            <IconClose />
          </button>
        </div>
      )}
      {error && (
        <div className={`${styles.messageBar} ${styles.error}`}>
          <IconError />
          <span>{error}</span>
        </div>
      )}

      {/* Content */}
      {loading ? (
        <div className={styles.loadingWrap}>
          <div className={styles.spinner} />
          <span>{strings.LoadingTeam}</span>
        </div>
      ) : rows.length === 0 ? (
        <div className={styles.emptyState}>
          <IconUsers />
          <span className={styles.emptyTitle}>{strings.NoTimesheetsFound}</span>
          <span className={styles.emptySubtitle}>
            {strings.NoTimesheetsHint}
          </span>
        </div>
      ) : (
        <>
          {/* Bulk action bar — visible when submitted rows exist */}
          {submittedRows.length > 0 && (
            <div
              className={`${styles.bulkBar} ${someSelected ? styles.bulkBarActive : ""}`}
            >
              <label className={styles.bulkSelectAll}>
                <input
                  type="checkbox"
                  className={styles.bulkCheckbox}
                  checked={allSelected}
                  onChange={toggleAll}
                />
                <span>
                  {allSelected
                    ? "Deselect all"
                    : `Select all submitted (${submittedRows.length})`}
                </span>
              </label>

              {someSelected && (
                <div className={styles.bulkActions}>
                  <span className={styles.bulkCount}>
                    {selectedKeys.length} selected
                  </span>
                  <button
                    className={`${styles.btn} ${styles.btnApprove}`}
                    disabled={bulkLoading}
                    onClick={() => openBulkModal("approve")}
                  >
                    <IconCheck /> Approve All
                  </button>
                  <button
                    className={`${styles.btn} ${styles.btnReject}`}
                    disabled={bulkLoading}
                    onClick={() => openBulkModal("reject")}
                  >
                    <IconReject /> Reject All
                  </button>
                  <button
                    className={`${styles.btn} ${styles.btnDefault}`}
                    disabled={bulkLoading}
                    onClick={() => setSelectedKeys([])}
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>
          )}

          <div className={styles.list}>
            {rows.map((row) => {
              const key = rowKey(row);
              const isSelected = selectedKeys.indexOf(key) !== -1;
              return (
                <div
                  key={key}
                  className={`${styles.rowCard} ${isSelected ? styles.rowCardSelected : ""}`}
                >
                  {/* Checkbox — only for Submitted */}
                  {row.status === "Submitted" && (
                    <label
                      className={styles.rowCheckWrap}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        className={styles.rowCheckbox}
                        checked={isSelected}
                        onChange={() => toggleRow(key)}
                      />
                    </label>
                  )}
                  {row.status !== "Submitted" && (
                    <div className={styles.rowCheckPlaceholder} />
                  )}

                  {/* Left: name + meta */}
                  <div className={styles.rowLeft}>
                    <div className={styles.rowNameRow}>
                      <span className={styles.rowName}>{row.employeeName}</span>
                      {row.totalHours > REGULAR_HOURS_PER_DAY && (
                        <span className={styles.otBadge} title={`${(row.totalHours - REGULAR_HOURS_PER_DAY).toFixed(2)} hrs overtime`}>
                          OT +{(row.totalHours - REGULAR_HOURS_PER_DAY).toFixed(2)}h
                        </span>
                      )}
                    </div>
                    <span className={styles.rowMeta}>
                      {formatDateLabel(row.entryDate)}
                      <span className={styles.dot} />
                      {row.entries.length} task
                      {row.entries.length !== 1 ? "s" : ""}
                      <span className={styles.dot} />
                      {row.totalHours.toFixed(2)} hrs
                    </span>
                  </div>

                  {/* Right: badge + actions */}
                  <div className={styles.rowRight}>
                    <span
                      className={`${styles.badge} ${badgeClass(row.status)}`}
                    >
                      {row.status}
                    </span>

                    {row.status === "Submitted" && (
                      <>
                        <button
                          className={`${styles.btn} ${styles.btnApprove}`}
                          onClick={() => openModal(row, "approve")}
                        >
                          <IconCheck /> {strings.ApproveBtn}
                        </button>
                        <button
                          className={`${styles.btn} ${styles.btnReject}`}
                          onClick={() => openModal(row, "reject")}
                        >
                          <IconReject /> {strings.RejectBtn}
                        </button>
                      </>
                    )}

                    {row.status === "Approved" && (
                      <button
                        className={`${styles.btn} ${styles.btnResubmit}`}
                        onClick={() => openModal(row, "resubmit")}
                      >
                        <IconRefresh /> {strings.RequestResubmitBtn}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* ── Bulk Action Modal ────────────────────────────────────────────────── */}
      <Modal
        isOpen={bulkModalOpen}
        onDismiss={() => {
          if (!bulkLoading) {
            setBulkModalOpen(false);
          }
        }}
        isBlocking={bulkLoading}
        containerClassName={styles.modalContainer}
      >
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            {bulkAction === "approve"
              ? `Approve ${selectedKeys.length} Timesheet${selectedKeys.length !== 1 ? "s" : ""}`
              : `Reject ${selectedKeys.length} Timesheet${selectedKeys.length !== 1 ? "s" : ""}`}
          </h2>
          <IconButton
            iconProps={{ iconName: "Cancel" }}
            ariaLabel="Close"
            onClick={() => setBulkModalOpen(false)}
            disabled={bulkLoading}
            className={styles.modalCloseBtn}
          />
        </div>

        <div className={styles.modalBody}>
          <div className={styles.panelMeta}>
            <span className={styles.panelMetaName}>
              {selectedKeys.length} timesheet
              {selectedKeys.length !== 1 ? "s" : ""} selected
            </span>
            <span className={styles.panelMetaDetail}>
              <span>
                {rows
                  .filter((r) => selectedKeys.indexOf(rowKey(r)) !== -1)
                  .map((r) => r.employeeName)
                  .filter((v, i, a) => a.indexOf(v) === i)
                  .join(", ")}
              </span>
            </span>
          </div>

          {bulkAction === "reject" && (
            <>
              <TextField
                label="Rejection Reason"
                required
                multiline
                rows={4}
                value={bulkComment}
                onChange={(_e, val) => setBulkComment(val || "")}
                placeholder="Provide a reason that will be sent to all selected employees…"
                disabled={bulkLoading}
              />
              {!bulkComment.trim() && (
                <span
                  style={{
                    color: "#a19f9d",
                    fontSize: 12,
                    display: "block",
                    marginTop: 4,
                  }}
                >
                  A comment is required before rejecting timesheets.
                </span>
              )}
            </>
          )}

          {bulkAction === "approve" && (
            <p style={{ margin: 0, fontSize: 13.5, color: "#525252" }}>
              This will approve all {selectedKeys.length} selected timesheet
              {selectedKeys.length !== 1 ? "s" : ""}. This action cannot be
              undone.
            </p>
          )}
        </div>

        <div className={styles.modalFooter}>
          <PrimaryButton
            disabled={
              bulkLoading || (bulkAction === "reject" && !bulkComment.trim())
            }
            className={
              bulkAction === "approve"
                ? styles.fluentBtnApprove
                : styles.fluentBtnReject
            }
            styles={{ root: { borderRadius: 6 } }}
            onClick={handleBulkAction}
          >
            {bulkLoading ? (
              <>
                <Spinner size={SpinnerSize.small} />
                <span style={{ marginLeft: 6 }}>Processing…</span>
              </>
            ) : bulkAction === "approve" ? (
              `Approve ${selectedKeys.length}`
            ) : (
              `Reject ${selectedKeys.length}`
            )}
          </PrimaryButton>
          <DefaultButton
            text={strings.Cancel}
            disabled={bulkLoading}
            styles={defaultBtnStyles}
            onClick={() => setBulkModalOpen(false)}
          />
        </div>
      </Modal>

      {/* ── Fluent UI Review Modal ───────────────────────────────────────────── */}
      <Modal
        isOpen={modalOpen}
        onDismiss={closeModal}
        isBlocking={actionLoading}
        containerClassName={styles.modalContainer}
      >
        {/* Modal header */}
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{modalTitle}</h2>
          <IconButton
            iconProps={{ iconName: "Cancel" }}
            ariaLabel="Close"
            onClick={closeModal}
            disabled={actionLoading}
            className={styles.modalCloseBtn}
          />
        </div>

        {/* Modal body */}
        {reviewRow && (
          <div className={styles.modalBody}>
            {/* Summary */}
            <div className={styles.panelMeta}>
              <span className={styles.panelMetaName}>
                {reviewRow.employeeName}
              </span>
              <span className={styles.panelMetaDetail}>
                <span>{formatDateLabel(reviewRow.entryDate)}</span>
                <span>
                  Total: <strong>{reviewRow.totalHours.toFixed(2)} hrs</strong>
                </span>
              </span>
            </div>

            {/* Task breakdown table */}
            <div className={styles.panelTableWrap}>
              <table className={styles.panelTable}>
                <thead>
                  <tr>
                    <th>{strings.Project}</th>
                    <th>{strings.Category}</th>
                    <th>{strings.Description}</th>
                    <th className={styles.colHrs}>{strings.Hrs}</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewRow.entries.map((e) => (
                    <tr key={e.id}>
                      <td>{e.projectName}</td>
                      <td>{e.activityCategoryName}</td>
                      <td>{e.taskDescription}</td>
                      <td className={styles.tdCenter}>{e.hoursSpent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Comment field — hidden for approve */}
            {reviewAction !== "approve" && (
              <>
                <TextField
                  label={strings.ManagerCommentLabel}
                  required
                  multiline
                  rows={4}
                  value={managerComment}
                  onChange={(_e, val) => setManagerComment(val || "")}
                  placeholder={strings.ManagerCommentPlaceholder}
                  disabled={actionLoading}
                />
                {!managerComment.trim() && (
                  <span
                    style={{
                      color: "#a19f9d",
                      fontSize: 12,
                      display: "block",
                      marginTop: 4,
                    }}
                  >
                    A comment is required before{" "}
                    {reviewAction === "reject"
                      ? "rejecting"
                      : "requesting re-submission of"}{" "}
                    this timesheet.
                  </span>
                )}
              </>
            )}
          </div>
        )}

        {/* Modal footer */}
        <div className={styles.modalFooter}>
          <PrimaryButton
            onClick={handleAction}
            disabled={confirmDisabled}
            styles={{ root: { borderRadius: 6 } }}
            className={
              reviewAction === "approve"
                ? styles.fluentBtnApprove
                : reviewAction === "reject"
                  ? styles.fluentBtnReject
                  : styles.fluentBtnResubmit
            }
          >
            {actionLoading ? (
              <>
                <Spinner size={SpinnerSize.small} />
                <span style={{ marginLeft: 6 }}>{strings.Processing}</span>
              </>
            ) : (
              confirmBtnLabel
            )}
          </PrimaryButton>
          <DefaultButton
            text={strings.Cancel}
            onClick={closeModal}
            disabled={actionLoading}
            styles={defaultBtnStyles}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ManagerDashboard;
