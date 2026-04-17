# CGP Governance
## Consensus Governance Protocol — Institutional Stewardship

**Document Version:** v0.4
**April 2026**

**Author:** Stevo (SkepticusMaximus)
**License:** GPL v3 for the protocol specification; governance body subject to its own licensing and constitutional arrangements.
**Status:** Governance-body specification. Institutional bodies do not yet exist.

---

## Preface

This document specifies the institutional body that stewards the CGP Core Protocol — its legal form, funding model, amendment process, relationship to forks, and bootstrap path toward self-governance.

The distinction between the protocol and its governance body is deliberate and load-bearing. The protocol is a specification that anyone may implement or fork under GPL v3. The governance body is a specific organisation that maintains the reference specification, licenses corporate deployments, engages regulatory bodies, and represents the project in public and diplomatic conversations.

Separating the two is a safety property. The protocol survives institutional failure because forks are legally free to carry it forward. The governance body cannot unilaterally change the protocol without a visible amendment process that forks are free to reject. Critics of the governance body can engage with it directly without being accused of attacking the protocol itself. Critics of the protocol can engage with its mathematics without being forced to engage with institutional politics.

The motto is separation of concerns: keep the policy pirates out of the midst of the design delegates, and the design delegates out of the midst of the policy pirates.

---

## 1. The Distinction, Made Precise

The **CGP Core Protocol** is a text document. It specifies token mechanics, consensus events, architectural constraints, and design invariants. It is analogous to RFC 791 (IP), the Ethereum Yellow Paper, or the Bitcoin White Paper. It is stable, citable, and version-numbered. Anyone can implement it. Anyone can fork it. Under GPL v3, forks carry the same rights as the original.

The **CGP Governance Body** is an institution. It has legal form, employees, a bank account, a jurisdiction, contracts, liabilities, and a reputation. It maintains the reference specification, produces amendments, licenses corporate deployments, accredits variant implementations, and represents the project in regulatory and diplomatic conversations. It can be captured. It can drift from mission. It can go bankrupt. It can be replaced.

Protocol versions are described in this suite using `v0.4` style numbering. Governance-body structure is described in this document using independent versioning, because the two can and should evolve at different rates.

A deployment that implements the protocol faithfully but does not use the governance body's licensed services is legitimate. A deployment that uses the governance body's branding without faithfully implementing the protocol is not.

---

## 2. Why Separation Matters

Three reasons.

**Protocol survival.** The protocol is designed to resist capture at the mathematical level. The governance body, being a human institution, cannot offer the same guarantee. If the governance body is captured, co-opted, corrupted, or simply fails institutionally, the protocol must continue to exist. Forks under GPL v3 preserve this continuity.

**Amendment legitimacy.** If the governance body could modify the protocol unilaterally, its own institutional interests would inevitably seep into the specification. Separating the documents forces amendments to pass through a visible, contestable process. Forks that reject amendments they disagree with retain the right to keep running the prior version.

**Criticism clarity.** Critiques of the mathematics are different from critiques of the institution. Collapsing them makes both worse. Someone who thinks the Ohm's Law relationship is formally broken should be able to engage the Core Protocol document without being drawn into institutional politics. Someone who thinks the governance body is captured should be able to engage the Governance document without being accused of attacking the protocol.

---

## 3. The Governance Body

### 3.1 Legal Form

The recommended legal form is a non-profit foundation registered in a jurisdiction with favourable treatment of open-source stewardship organisations. Candidates include Switzerland (Ethereum Foundation precedent), Netherlands, Singapore, and Estonia. Final jurisdiction choice is subject to legal consultation and will depend on factors including regulatory clarity around crypto-involved organisations, tax treatment, availability of banking, and accessibility to founding members.

Alternative forms considered and provisionally rejected:

**Pure DAO.** Attractive in principle; premature in practice. A pure DAO governance body requires the protocol already to be running at scale before governance can operate. The bootstrap path requires a legally-anchored entity that can sign contracts, hold funds, and engage regulators. A DAO can replace or augment the foundation over time, but cannot be the initial form.

**For-profit corporation.** Rejected. A for-profit structure creates incentives misaligned with the protocol's anti-capture design. Corporate stewardship of governance infrastructure is itself a capture vector the protocol is designed to resist.

**Hybrid foundation-plus-commercial-arm.** An operating foundation can hold an associated commercial entity that handles corporate licensing, similar to how the Linux Foundation operates alongside various commercial Linux distributions. This hybrid is the most likely long-term form, but the foundation-only form is the appropriate starting point.

### 3.2 Mandate

The Governance Body's mandate has six components.

**Protocol maintenance.** Publish, version, and maintain the reference specification. Receive, evaluate, and respond to proposed amendments through the defined process.

**Reference implementation.** Maintain or accredit reference implementations of the protocol — Solidity contracts, NNTP extensions, client software — that demonstrate faithful compliance and serve as starting points for deployments.

**Corporate licensing.** License CCGP deployments to corporations, with revenue funding protocol development and foundation operations.

**Regulatory engagement.** Represent the project in conversations with tax authorities, securities regulators, electoral commissions, and other relevant bodies. Provide expertise to regulators evaluating CGP-related activities.

**Accreditation.** Certify variant implementations as compliant with the phylum-level invariants. Flag deployments that use CGP branding without conformance.

**Ecosystem development.** Coordinate cross-variant learning, host documentation, maintain collaborator registries, and facilitate connections between implementers.

The mandate explicitly excludes: operating SCGP deployments directly (the Foundation is a steward, not a state actor); holding political positions on specific mandates within any SCGP deployment (the Foundation is neutral on policy); privileging any variant over others in protocol decisions (all variants are first-class).

### 3.3 Governance of the Governance Body

Bootstrap form: a maintainer committee of 5–9 members, drawn from the initial contributor pool, with rotating leadership and staggered terms. Committee decisions are made by consensus where possible and supermajority (two-thirds) where consensus fails. Term length: two years with staggered expirations so that no more than half the committee turns over in any year.

Maintainer committee responsibilities include approving protocol amendments (through the process described in Section 5), approving the annual budget, appointing operational staff, and determining corporate-licensing terms.

Transition to CGP-governed CGP — using CGP itself for the governance of the Foundation — is the long-term target but is deliberately not the bootstrap form. Several years of empirical evidence from variant deployments must accumulate before applying the protocol to the Foundation itself would be responsible.

When the transition occurs, the Foundation's stakeholders would plausibly be: individual contributors, variant-operator organisations, and institutional supporters. The performance metrics would be adoption growth, deployment health indicators, and absence of protocol failures. The anchor asset would be licensing revenue and grant funding. Working through this as an actual mandate would be a significant validation of the protocol, and is treated as a Phase 3 milestone.

---

## 4. Funding Model

The Governance Body is funded through four streams, in descending order of intended stability.

**Corporate licensing.** CCGP deployments pay a license fee to the Foundation for use of the reference implementation and for accreditation. Structure: annual license proportional to anchor pool size, capped at a ceiling to prevent single-corporation capture via excessive payment. This is the intended primary long-term revenue source.

**Grants.** Foundations supporting open-source infrastructure, democratic innovation, and governance research. Ethereum Foundation grants, philanthropic grants, government research grants where available without creating conflict of interest.

**Contributor sponsorship.** Individual and institutional sponsors who want to support protocol development. Structurally a minor revenue stream but valuable for community alignment.

**Reserve appreciation.** Foundation-held crypto reserves appreciate under the same assumptions that fund the protocol itself. Not intended as primary revenue but as hedge against other sources fluctuating.

The funding model explicitly excludes: advertising, selling user data, taking equity stakes in corporate deployments (which would create capture incentives), and charging deployment fees to SCGP, NCGP, or CoopCGP deployments (which would create access inequity).

CCGP licensing subsidises the other variants, deliberately. Corporate deployers are the party with the financial capacity to sustain the protocol; non-profit, cooperative, and public-sector deployers benefit from that subsidy as a matter of design.

---

## 5. Amendment Process

Changes to the Core Protocol follow a defined process. Changes to this document and the Application Variants document follow lighter processes, because those documents are expected to evolve faster and are not as load-bearing.

### 5.1 Core Protocol Amendments

Amendment proposals are drafted publicly, with a specified author or authors. They follow a defined structure: motivation, specification, compatibility analysis, security analysis, alternative designs considered, and reference implementation or implementation plan.

Review period: minimum sixty days. Reviews include public commentary, implementer feedback, and formal security review where appropriate. During the review period, the proposal may be revised by its author(s) in response to feedback.

Approval: the maintainer committee approves by supermajority after the review period concludes. Approved amendments are incorporated in the next version of the Core Protocol.

Rejected amendments remain publicly documented, with the rationale for rejection. Rejected amendments may be resubmitted with substantive revision.

Fork rights: any implementer is free to implement rejected or unsubmitted changes in their own fork. The Foundation does not prevent forks; it only specifies what is and is not compliant with the reference protocol.

### 5.2 Variant Document Amendments

Amendments to the Application Variants document follow a lighter process: maintainer committee review without mandatory sixty-day public comment, on the grounds that variant-specific text will need to respond more quickly to deployment evidence. Significant revisions — new variants, structural changes to existing variants — still warrant public review.

### 5.3 Governance Document Amendments

This document describes the Foundation itself and therefore cannot be amended by the Foundation unilaterally without apparent conflict of interest. Amendments here require supermajority maintainer committee approval plus a broader ratification mechanism: either (a) ratification by a specified supermajority of active variant implementers, or (b) in the post-bootstrap era, ratification via CGP process inside the Foundation itself.

### 5.4 Emergency Patches

Security vulnerabilities in the reference implementation may require faster response than the standard amendment process. The maintainer committee is authorised to issue emergency patches to reference implementations without full amendment process, with immediate public disclosure of the vulnerability and the patch, and a follow-up full amendment process within 90 days to integrate the patch into the specification.

Emergency patches that affect the Core Protocol's architectural specification (rather than implementation details) are not permitted. If a vulnerability requires architectural change, the full amendment process is required, with recommended emergency mitigations published to implementers in the interim.

---

## 6. Relationship to Forks

The protocol is GPL v3. Anyone may fork it. The Foundation does not attempt to prevent forks and actively supports the right to fork as a safety property.

Fork legitimacy does not require Foundation approval. A fork that implements the phylum-level invariants faithfully is a CGP deployment regardless of Foundation accreditation. Accreditation provides a reference point for users seeking assurance, not an authoritative determination of validity.

Fork divergence is expected and healthy. Different jurisdictions, different corporate cultures, different variant domains will surface divergent pressures that may require divergent adaptations. A fork that resolves an open question in its own way and demonstrates the choice works in practice feeds evidence back into the reference specification's next amendment cycle.

Hostile forks — forks that claim CGP branding while violating invariants — are a possibility the Foundation handles through accreditation signalling rather than legal action. The Foundation publishes a compliance registry. Deployments can self-accredit or Foundation-accredit; the registry notes the difference. Users choose which to trust.

---

## 7. Regulatory Engagement

The Foundation engages with regulators on behalf of the ecosystem as a whole, in three modes.

**Reactive engagement.** When regulators raise questions about specific deployments, the Foundation provides protocol expertise to help regulators evaluate the activity accurately rather than through analogy to poorly-fitting precedents.

**Proactive education.** The Foundation publishes regulator-oriented documentation explaining CGP mechanics in terms that fit regulatory frameworks, and makes subject-matter experts available for consultation with regulatory bodies.

**Standards participation.** Where standards bodies are relevant (financial standards, digital-identity standards, civic-tech standards), the Foundation participates in standards processes to ensure CGP-compatible approaches are represented.

The Foundation explicitly does not lobby for specific legislation favouring CGP. The protocol's legitimacy derives from its transparency and its voluntary adoption, not from regulatory preference. Lobbying would undermine the legitimacy claim.

The Foundation does accept and solicit regulatory clarifications that reduce deployment friction. "Is this activity subject to securities regulation?" deserves a clear answer from securities regulators; seeking that clarification is distinct from lobbying for preferential treatment.

---

## 8. Anti-Capture Measures

The Foundation itself is a capture surface. Measures to mitigate this risk:

**Maintainer committee composition.** Committee members must come from diverse institutional, geographic, and variant-domain backgrounds. No single organisation may hold more than one committee seat. No single jurisdiction may hold more than a third of committee seats.

**Transparency of funding.** All Foundation funding above a disclosure threshold is public. Corporate licensees are named in an annual report. Grant sources are disclosed. Sponsorships above the threshold are disclosed.

**Transparency of deliberations.** Committee decisions are documented with rationale. Dissenting opinions are recorded where dissent is formally expressed. Meeting minutes above an operational-detail threshold are public.

**Fork-right preservation.** The Foundation's governance documents explicitly affirm the right to fork and commit not to pursue legal action against compliant forks regardless of Foundation approval status.

**Term limits and turnover.** Maintainer committee terms are limited; staff leadership positions are term-limited. Institutional memory is important but not more important than preventing entrenchment.

**Annual external audit.** Financial and governance audit conducted annually by independent auditors, with reports made public.

---

## 9. Bootstrap Path

The Foundation does not yet exist. Its creation requires sequenced steps.

**Step 1: Founding working group.** An informal group of initial contributors — protocol designers, implementers, prospective variant operators — meets to agree on the Foundation's initial scope, maintainer committee composition, and jurisdiction. This group has no legal standing; its deliverable is a draft founding charter.

**Step 2: Legal establishment.** The founding charter is implemented as the legal founding documents of the chosen entity in the chosen jurisdiction. Legal counsel, jurisdictional registration, initial banking. Funded through founding-contributor donations and initial grants.

**Step 3: Operational spin-up.** Initial staff hired (executive director, technical lead, legal and compliance, communications). Reference implementation work begins. Documentation infrastructure established. First grant applications submitted.

**Step 4: First corporate licensees.** CCGP pilot deployments contract with the Foundation for reference implementation access and accreditation. License revenue begins to offset operational costs.

**Step 5: Broad operational status.** Foundation operates as an established open-source stewardship organisation. Amendment process formally running. Regulatory engagement active. Multiple variants with active deployments.

**Step 6 (long-term): CGP-governed CGP.** Foundation governance migrates to using the CGP protocol itself, with Foundation stakeholders voting on Foundation decisions via a CGP deployment. This step is deliberately not scheduled — it requires accumulated evidence that CGP works well enough at Foundation scale to be responsibly applied to the Foundation itself.

The timeline is not specified here because it depends heavily on external factors — funding availability, initial cohort assembly, jurisdictional factors, broader regulatory developments. A realistic first-pass timeline has Step 2 completing within the first year of funded activity, Step 4 within three years, Step 5 within five years. Step 6 is not projected.

---

## 10. Initial Call

This document exists before the Foundation does. It describes what the Foundation should be, so that the Foundation, when created, can be measured against its own founding intention.

The founding working group is open. Individuals and organisations interested in participating in the Step 1 discussions can express interest through the project's stated contact channels. Initial participation does not require the institutional credentials that later stages may require; what is required is serious engagement with the protocol, commitment to the project's goals, and willingness to operate in the open.

Particularly valuable founding-working-group participants include: people with experience running open-source foundations (Apache, Linux, Python, Ethereum); legal counsel with jurisdictional expertise in the candidate locations; prospective variant operators with concrete deployment plans; democratic-theory and governance-studies researchers who can provide theoretical grounding; and representatives of existing civic-tech and participatory-democracy communities whose infrastructure CGP should interoperate with.

The founding group is not the Foundation. Its job is to make the Foundation possible, then to hand authority to the first maintainer committee. Founding-group members may or may not join the first committee; that is a separate decision based on fit and availability.

---

## 11. Closing

The protocol is the main event. The governance body exists to keep the main event running, not to become the main event itself.

An imperfect Foundation supporting a correct protocol is better than a perfect Foundation supporting a broken protocol. The protocol is where design effort should concentrate. The Foundation should be boring — a competent, transparent, anti-capture-designed steward that does the operational work of keeping the protocol available, documented, and legitimate.

If the Foundation ever becomes more interesting than the protocol, something has gone wrong.

Stevo
Adelaide, April 2026

---

*This document specifies an institutional body that does not yet exist. Its specification here is meant to guide the creation of that body when the ecosystem is ready. Successor versions will incorporate lessons from the bootstrap process, feedback from the founding working group, and experience from early operational phases.*
