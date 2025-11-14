\# HR System Requirements: Recruitment, Onboarding, & Offboarding

This document outlines the requirements for the three main phases of the employee lifecycle: Recruitment, Onboarding, and Offboarding.

\## Detailed End-to-End Workflow

This section details the step-by-step flow of actions, actors, and data outputs for the entire process.

\### Phase I: Recruitment (Acquisition & Offer)

1\. \*\*Setup Templates\*\*

\* \*\*Actor:\*\* HR Manager

\* \*\*Action / Process:\*\* Define standardized job description templates \[REC-003\] and establish hiring process templates \[REC-004\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: REC-003, REC-004. BR: Process template defines stages and progress percentage.

\* \*\*Outputs & Data Flow:\*\* Output: Standardized Templates (Stored). Data Flow: Consumed by job posting (REC-023).

2\. \*\*Publish Job\*\*

\* \*\*Actor:\*\* HR Employee

\* \*\*Action / Process:\*\* Preview and publish jobs on the company careers page \[REC-023\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: REC-023. BR: Posting must be automatic once approved.

\* \*\*Outputs & Data Flow:\*\* Output: Active Job Posting (Live). Data Flow: Feeds job list to Candidate Dashboard. Updates Org Structure (position marked “Vacant”).

3\. \*\*Application & Consent\*\*

\* \*\*Actor:\*\* Candidate

\* \*\*Action / Process:\*\* Upload CV \[REC-007\] and give consent for personal-data processing \[REC-028\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: REC-007, REC-028. BR: Storing applications requires applicant authorization.

\* \*\*Outputs & Data Flow:\*\* Output: Applicant Record; Consent Logged. Data Flow: CV stored in Talent Pool; consent enables compliance checks.

4\. \*\*Pipeline & Tags\*\*

\* \*\*Actor:\*\* HR Employee

\* \*\*Action / Process:\*\* Tag candidates as referrals \[REC-030\] and track candidates through each stage of the hiring process \[REC-008\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: REC-030, REC-008. BR: Applications tracked through defined stages. Referrals get preferential filtering.

\* \*\*Outputs & Data Flow:\*\* Output: Updated Candidate Status; Referral Tagged. Data Flow: Status change triggers notifications (N-004).

5\. \*\*Evaluation\*\*

\* \*\*Actor:\*\* HR Employee

\* \*\*Action / Process:\*\* Use structured assessment and scoring forms per role \[REC-020\], coordinate interviews \[REC-021\], and schedule/manage invitations \[REC-010\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: REC-020, REC-021, REC-010, REC-011. BR: Structured assessment forms required; ranking rules enforced.

\* \*\*Outputs & Data Flow:\*\* Output: Interview Feedback / Score Completed. Data Flow: Scores logged to candidate record for ranking.

6\. \*\*Monitoring & Communication\*\*

\* \*\*Actor:\*\* HR Manager / Candidate

\* \*\*Action / Process:\*\* HR monitors recruitment progress \[REC-009\]; candidates get automatic updates \[REC-017\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: REC-009, REC-017. BR: Status tracking must be real-time and visualized; automated notifications required.

\* \*\*Outputs & Data Flow:\*\* Output: Progress Dashboard View; Status Notifications (N-051). Data Flow: Consumes pipeline data.

7\. \*\*Offer & Transition\*\*

\* \*\*Actor:\*\* HR Manager / HR Employee

\* \*\*Action / Process:\*\* Manage job offers and approvals \[REC-014\]; generate and send e-signed offers \[REC-018\]; send automated rejections \[REC-022\]; trigger pre-boarding \[REC-029\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: REC-014, REC-018, REC-022, REC-029. BR: Offer acceptance triggers Onboarding; offer data used for contract creation.

\* \*\*Outputs & Data Flow:\*\* Output: Signed Offer Letter (Stored); Rejection Sent. Data Flow: Triggers Onboarding initiation; data populates Employee Profile.

\### Phase II: Onboarding (Integration & Provisioning)

8\. \*\*Profile Creation & Checklist\*\*

\* \*\*Actor:\*\* HR Manager

\* \*\*Action / Process:\*\* Create onboarding task checklists \[ONB-001\]; access signed contract to create employee profile \[ONB-002\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: ONB-001, ONB-002. BR: Triggered by offer acceptance; checklists customizable.

\* \*\*Outputs & Data Flow:\*\* Output: Employee Profile (Active); Onboarding Checklist (Activated). Data Flow: Uses signed contract data from Recruitment; outputs to Employee Profile.

9\. \*\*Compliance & Tracking\*\*

\* \*\*Actor:\*\* New Hire

\* \*\*Action / Process:\*\* View onboarding tracker \[ONB-004\]; receive reminders \[ONB-005\]; upload compliance documents \[ONB-007\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: ONB-004, ONB-005, ONB-007. BR: Tracker and reminders required; documents stored securely.

\* \*\*Outputs & Data Flow:\*\* Output: Documents Uploaded (Stored); Task Progress Updated. Data Flow: Documents stored in Employee Profile.

10\. \*\*Resource Provisioning\*\*

\* \*\*Actor:\*\* HR Employee / System Admin

\* \*\*Action / Process:\*\* Reserve and track equipment \[ONB-012\]; provision secure system access \[ONB-009\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: ONB-012, ONB-009. BR: IT and payroll access automated; all resources tracked.

\* \*\*Outputs & Data Flow:\*\* Output: Access Granted; Equipment Reserved. Data Flow: Logged for audit; feeds Time Management (clock access).

11\. \*\*Payroll Initiation & Benefits\*\*

\* \*\*Actor:\*\* HR Manager

\* \*\*Action / Process:\*\* Automate payroll initiation upon contract signing \[ONB-018\]; process signing bonuses \[ONB-019\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: ONB-018, ONB-019. BR: Bonuses treated as distinct payroll components; payroll trigger automatic.

\* \*\*Outputs & Data Flow:\*\* Output: Payroll Initiation Triggered; Bonus Processed. Data Flow: Triggers payroll processing steps (REQ-PY-23, REQ-PY-27).

12\. \*\*Scheduled Access Management\*\*

\* \*\*Actor:\*\* HR Manager / System Admin

\* \*\*Action / Process:\*\* Schedule automatic provisioning and revocation of accounts \[ONB-013\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: ONB-013. BR: Provisioning and security must be consistent.

\* \*\*Outputs & Data Flow:\*\* Output: Scheduled Revocation Flag. Data Flow: Info passed to Offboarding (OFF-007) for security control.

\### Phase III: Offboarding (Separation & Clearance)

13\. \*\*Exit Initiation\*\*

\* \*\*Actor:\*\* Employee / HR Manager

\* \*\*Action / Process:\*\* Employee submits resignation \[OFF-018\] or HR initiates termination review \[OFF-001\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: OFF-018, OFF-019, OFF-001. BR: Separation may result from resignation or termination; justification mandatory.

\* \*\*Outputs & Data Flow:\*\* Output: Resignation Request Submitted; Termination Review Started. Data Flow: Status triggers workflow approval.

14\. \*\*Clearance & Assets\*\*

\* \*\*Actor:\*\* HR Manager

\* \*\*Action / Process:\*\* Manage offboarding checklist and departmental sign-offs (IT, Finance, Facilities, etc.) \[OFF-006, OFF-010\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: OFF-006, OFF-010. BR: Multi-department clearance required; completion tracked.

\* \*\*Outputs & Data Flow:\*\* Output: Offboarding Checklist Active; Clearance Sign-offs Logged. Data Flow: Clearance governs final payroll release.

15\. \*\*Security Revocation\*\*

\* \*\*Actor:\*\* System Admin

\* \*\*Action / Process:\*\* Revoke system and account access on termination \[OFF-007\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: OFF-007. BR: Access revocation required for security.

\* \*\*Outputs & Data Flow:\*\* Output: Access Disabled (Logged). Data Flow: Logs stored in audit trail; confirms ONB-013 revocation.

16\. \*\*Final Settlement\*\*

\* \*\*Actor:\*\* HR Manager

\* \*\*Action / Process:\*\* Trigger final pay calculation and benefits termination \[OFF-013\].

\* \*\*Supporting User Stories (US) and Rules (BR):\*\* US: OFF-013. BR: Final pay includes unused leave, deductions, loans, severance; benefits auto-terminate.

\* \*\*Outputs & Data Flow:\*\* Output: Final Pay Calculation Triggered; Benefits Termination Scheduled. Data Flow: Sends encashment data from Leaves; triggers Payroll processing.

\---

\## Detailed Requirement User Stories

This section contains the full list of user stories and technical requirements for each phase.

\### Phase 1: Recruitment Process

| Requirement Name | User Story ID | User Story | Inputs Needed | Downstream Sub‑Systems | Key BRs |

| :--- | :--- | :--- | :--- | :--- | :--- |

| Job Design & Posting | REC-003 | As an HR Manager, I want to define standardized job description templates, so that postings are consistent. | Organizational Structure (OS) | Recruitment (Job Posting) | BR 2 |

| Job Design & Posting | REC-004 | As an HR Manager, I want to be able to establish hiring processes templates so that the system can automatically update progress percentage. | None (System Configuration) | Recruitment (Candidate Tracking) | BR 9 |

| Job Design & Posting | REC-023 | As a HR Employee, I want to preview and publish jobs on the company careers page with employer-brand content, so openings look professional. | None | External Careers Page | BR 6 |

| Candidate App. & Comm. | REC-007 | As a Candidate, I want to upload my CV and apply for positions, so that I can be considered for opportunities. | Candidate CVs/Documents | Recruitment (Talent Pool) | BR 12 |

| Candidate App. & Comm. | REC-017 | As a Candidate, I want to receive updates about my application status, so that I know where I stand. | Recruitment (Candidate Status) | Candidate Self-Service Portal | BR 27, 36 |

| Candidate App. & Comm. | REC-022 | As a HR Employee, I want automated rejection notifications and templates, so candidates are informed respectfully and consistently. | Recruitment (Rejection Template) | External Communication | BR 36, 37 |

| Candidate Tracking & Eval. | REC-008 | As a HR Employee, I want to track candidates through each stage of the hiring process, so that I can manage progress. | Hiring Process Template (REC-004) | Recruitment (Status Tracking) | BR 9, 11 |

| Candidate Tracking & Eval. | REC-010 | As a HR Employee, I want to schedule and manage interview invitations, so that candidates are engaged efficiently. | Time Management (TM) | Notifications (N) | BR 19(a, c, d) |

| Candidate Tracking & Eval. | REC-011 | As an HR Employee, I want to be able to provide feedback/interview score for scheduled interviews for filtration. | Interview panel feedback/scores | Recruitment (Applicant Scoring) | BR 10, 22 |

| Candidate Tracking & Eval. | REC-020 | As an HR Employee, I want structured assessment and scoring forms per role, so evaluations are consistent and auditable. | Evaluation Criteria (REC-015) | Recruitment (Applicant Scoring) | BR 21, 23 |

| Candidate Tracking & Eval. | REC-021 | As a HR Employee, I want to coordinate interview panels (members, availability, scoring), so scheduling and feedback collection are centralized. | Calendar/Time Management | Recruitment (Interview Scheduling) | BR 19(a, b), 20 |

| Candidate Tracking & Eval. | REC-030 | As a HR Employee, I want to be able to tag candidates as referrals in order to give them a higher chance of having an earlier interview. | Candidate data | Recruitment | BR 14, 25 |

| Recruitment Analytics | REC-009 | As an HR Manager, I want to monitor recruitment progress across all open positions, so that I stay informed. | Recruitment data (REC-008) | Recruitment | BR 33 |

| Compliance & B. Checks | REC-028 | As a Candidate, I want to give consent for personal-data processing and background checks, so the system remains compliant with privacy laws. | None (Candidate input) | Recruitment | BR 28, NFR-33 |

| Offers & Hiring Decisions | REC-014 | As an HR Manager, I want to manage job offers and approvals, so that candidates can be hired smoothly. | Financial Approval (REC-027) | Onboarding | BR 26(b, c) |

| Offers & Hiring Decisions | REC-018 | As a HR Employee/HR Manager, I want to generate, send and collect electronically signed offer letters... | Offer template | Onboarding | BR 26(a, d), 37 |

| Offers & Hiring Decisions | REC-029 | As a HR Employee, I want to trigger pre-boarding tasks (contract signing, forms) after offer acceptance... | Offer Acceptance Status | Onboarding Module | BR 26(c) |

\### Phase 2: Onboarding Process

| Requirement Name | User Story ID | User Story | Inputs Needed | Downstream Sub‑Systems | Key BRs |

| :--- | :--- | :--- | :--- | :--- | :--- |

| Setup & Task Management | (N/A) | As an Candidate, I want to upload signed contract and candidate required forms... | None (Configuration) | New Hire Tracker (ONB-004) | Added By us |

| Setup & Task Management | ONB-001 | As an HR Manager, I want to create onboarding task checklists, so that new hires complete all required steps. | None (Configuration) | New Hire Tracker (ONB-004) | BR 8, 11 |

| Setup & Task Management | ONB-002 | As an HR Manager, I want to be able to access signed contract detail to be able create an employee profile. | Recruitment (Signed Offer) | Employee Profile (EP) | BR 17(a, b) |

| Setup & Task Management | ONB-004 | As a New Hire, I want to view my onboarding steps in a tracker, so that I know what to complete next. | Onboarding Checklist Data | Notifications (N) | BR 11(a, b) |

| Setup & Task Management | ONB-005 | As a New Hire, I want to receive reminders and notifications, so that I don’t miss important onboarding tasks. | Notifications Module (N) | None | BR 12 |

| Document Mgmt & Compliance | ONB-007 | As a New Hire, I want to upload documents (e.g., ID, contracts, certifications), so that compliance is ensured. | None (New Hire Input) | Employee Profile (EP) | BR 7 |

| Access, Resources & Prov. | ONB-009 | As a System Admin, I want to provision system access (payroll, email, internal systems), so that the employee can work. | Employee Profile (New Hire) | Notifications (N) to IT/Access | BR 9(b) |

| Access, Resources & Prov. | ONB-012 | As a HR Employee, I want to reserve and track equipment, desk and access cards for new hires... | None | Notifications (N) to Facilities | BR 9(c) |

| Access, Resources & Prov. | ONB-013 | As a HR Manager, I want automated account provisioning (SSO/email/tools) on start date and scheduled revocation on exit... | System Admin Configuration | IT/Access Systems, Offboarding | BR 9(b), 20 |

| Payroll & Benefits Init. | ONB-018 | As a HR Manager, I want the system to automatically handle payroll initiation based on the contract signing day... | Recruitment (Contract Date) | Payroll Module (PY) | BR 9(a) |

| Payroll & Benefits Init. | ONB-019 | As a HR Manager, I want the system to automatically process signing bonuses based on contract after a new hire is signed. | Recruitment (Contract Details) | Payroll Module (PY) | BR 9(a) |

\### Phase 3: Offboarding Process

| Requirement Name | User Story ID | User Story | Inputs Needed | Downstream Sub‑Systems | Key BRs |

| :--- | :--- | :--- | :--- | :--- | :--- |

| Termination & Resignation | OFF-001 | As an HR Manager, I want to initiate termination reviews based on warnings and performance data / manager requests... | Performance Management (PM) | Offboarding Approval Workflow | BR 4 |

| Termination & Resignation | OFF-018, 019 | As an Employee, I want to be able to request a Resignation request with reasoning. As an Employee, I want to be able to track my resignation request status. | Employee Profile (Reason) | Offboarding Approval Workflow | BR 6 |

| Clearance, Handover & Access | OFF-006 | As an HR Manager, I want an offboarding checklist (IT assets, ID cards, equipment), so no company property is lost. | None (Configuration) | Clearance Workflow (OFF-010) | BR 13(a) |

| Clearance, Handover & Access | OFF-007 | As a System Admin, I want to revoke system and account access upon termination, so security is maintained. | Employee Profile (Inactive) | Notifications (N) IT/Access | BR 3(c), 19 |

| Clearance, Handover & Access | OFF-010 | As HR Manager, I want multi-department exit clearance sign-offs (IT, Finance, Facilities, Line Manager)... | Clearance Status Updates | Payroll (Final Settlement) | BR 13(b, c), 14 |

| Exit Settlements & Benefits | OFF-013 | As HR Manager, I want to send offboarding notification to trigger benefits termination and final pay calc (unused leave, deductions)... | Leaves Module (Balance) | Payroll Module (PY) | BR 9, 11 |

\---

\## Minimized Workflow Descriptions

This section contains the actor-based step-by-step tables for the minimized Onboarding and Offboarding workflows.

\### Phase 2: Minimized Onboarding Workflow

| Step | Actor | Action/Process | Key User Stories Supported | Output/System Trigger |

| :--- | :--- | :--- | :--- | :--- |

| 1. Initiation & Profile Creation | HR Employee | Initiate Onboarding & Profile Creation: Upload signed contract, forms, and templates. System creates Employee Profile. | ONB-002 | Employee Profile (EP) Activated. Status set to 'Probation'. |

| 2. Compliance & Task Assignment | HR Manager | Checklist Creation: Creates and assigns onboarding task checklist to new hire. | ONB-001 | New Hire receives task list (ONB-004). |

| 2. Compliance & Task Assignment | New Hire | Document Upload & Tracking: Views tracker, receives reminders, and uploads required documents. | ONB-004, ONB-005, ONB-007 | Documents stored in Employee Profile. Notifications for pending tasks. |

| 3. Provisioning & Asset Allocation | HR Employee | Resource Reservation: Reserves and tracks physical equipment, desk space, and access cards. | ONB-012 | Task generated for Admin/Facilities. |

| 3. Provisioning & Asset Allocation | System Admin / HR Manager | Account Provisioning: System auto-provisions IT access and schedules future access revocation. | ONB-009, ONB-013 | Access granted/logged; future Offboarding revocation scheduled. |

| 4. Payroll Initiation | HR Manager | Payroll/Benefits Initiation: System auto-handles payroll initiation and signing bonuses. | ONB-018, ONB-019 | Tasks generated for Payroll Specialist. Payroll Module (PY) triggered. |

\### Phase 3: Minimized Offboarding Workflow

| Step | Actor | Action/Process | Key User Stories Supported | Output/System Trigger |

| :--- | :--- | :--- | :--- | :--- |

| 1. Separation Initiation | Employee | Resignation Request: Submits resignation request with reasoning. | OFF-018, OFF-019 | Offboarding Approval Workflow initiated. |

| 1. Separation Initiation | HR Manager | Termination Initiation: Initiates termination reviews based on performance data. | OFF-001 | Requires justification and approval path. |

| 2. Clearance & Asset Recovery | System Admin | Access Revocation: System revokes system and account access upon termination. | OFF-007 | Employee Login disabled; Profile status updated to Inactive. |

| 2. Clearance & Asset Recovery | HR Manager | Clearance Workflow Initiation: Initiates offboarding checklist for asset recovery. | OFF-006 | Clearance Checklist generated. |

| 2. Clearance & Asset Recovery | HR Manager | Multi-Department Sign-off: Manages multi-department exit clearance sign-offs. | OFF-010 | System tracks completion; final approvals filed to HR. |

| 3. Final Settlement | HR Manager | Final Pay Trigger: Sends notification to trigger benefits termination and final pay calculation. | OFF-013 | Leaves’ Balance reviewed and settled. Payroll Module (PY) triggered. |