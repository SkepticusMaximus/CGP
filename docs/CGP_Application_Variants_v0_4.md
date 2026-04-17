# CGP Application Variants
## Consensus Governance Protocol — Domain-Specific Instantiations

**Document Version:** v0.4
**April 2026**

**Author:** Stevo (SkepticusMaximus)
**License:** GPL v3 (intended)
**Status:** Variant catalogue. Each variant specification is draft-level.

---

## Preface

This document catalogues the domains in which the CGP Core Protocol can be instantiated. The Core Protocol specifies the phylum — the invariants common to every CGP deployment. This document specifies the species — the adaptations required to fit the phylum to specific environments.

Four variants are currently identified: State CGP (SCGP), Corporate CGP (CCGP), Non-profit CGP (NCGP), and Cooperative CGP (CoopCGP). Others may emerge. The variant structure is deliberately open-ended — anything that maps cleanly onto the phylum-level invariants is eligible.

This document is a working catalogue, not a standard. Variants will be refined as empirical deployment generates evidence. Readers should assume the Core Protocol is stable and this document is live.

---

## 1. Phylum-Level Invariants

Every CGP variant, regardless of domain, must preserve the following properties. A deployment that relaxes any of them is not CGP.

**Triadic token structure.** Three token classes corresponding to the stakeholder, the liquidity/escrow layer, and the performer. No bilateral exchange permitted.

**PoD and PoR as distinct consensus events.** Deliberation produces mandates (PoD); delivery produces ratification (PoR). The two fire at different moments, mint different tokens, and serve different functions.

**Equal-share dividends for deliberation participants.** Wealth or size of bid does not confer greater democratic reward. Participation is binary from the reward perspective: substantive engagement earns equal share; non-engagement earns nothing.

**Emergent reciprocal supply against an anchor.** No engineered inflation or deflation schedule. Total value is bounded by the surplus generated above the anchor asset.

**Transparency as safety property.** Every element must be human-readable without AI assistance. No black-box adjudication.

**Free-speech discussion substrate.** Uncensored, distributed, resistant to platform capture. NNTP/Usenet is the default recommendation but not strictly mandatory — what is mandatory is the property set (distributed, threaded, resistant to central capture, proven at scale).

A variant specification that satisfies these six invariants is a valid CGP deployment. A variant that does not satisfy all six is something else — potentially something interesting, but not CGP, and should not claim the name.

---

## 2. Species-Level Variation

The axes along which variants differ are catalogued here. Each variant section that follows specifies its position on each axis.

**Anchor asset.** What the Agent Coin is denominated in. Tax pool for SCGP; profit pool or performance-bonus reserve for CCGP; donations or grants for NCGP; member dues for CoopCGP. The anchor is the economic foundation from which the surplus is drawn.

**Stakeholder definition.** Who holds Citizen Coin equivalents. Citizens in SCGP; employees or shareholders in CCGP; donors or beneficiaries (or both) in NCGP; members in CoopCGP.

**Performer definition.** Who holds Poli Coin equivalents. Elected politicians and public servants in SCGP; management and executives in CCGP; staff and programme leaders in NCGP; elected officers in CoopCGP.

**Performance metric.** What the PoR oracle verifies. Policy delivery in SCGP; corporate KPIs in CCGP; programme outputs in NCGP; cooperative outcomes in CoopCGP. Oracle difficulty varies sharply — pothole-filled verification is easier than foreign-policy-outcome verification.

**Regulatory environment.** What legal and compliance framework the variant operates under. Tax law and electoral law in SCGP; corporate governance and securities law in CCGP; charitable-status regulations in NCGP; cooperative registry regulations in CoopCGP.

**Time horizon.** The typical window from mandate to ratification. Weeks to months in CCGP; months to years in SCGP; varies widely in NCGP; seasonal-to-annual in CoopCGP.

**Agent role fit.** The appropriate form of the Agent node. Human tax agents progressing to AI/DAO in SCGP; corporate finance and compliance functions in CCGP; potentially fully autonomous AI/DAO from inception in small NCGP; cooperative administrators or external auditors in CoopCGP.

---

## 3. State CGP (SCGP)

The default reading of the CGP Core Protocol. Public-policy governance anchored to tax pools, serving citizens, rewarding politicians for verified policy delivery.

**Anchor asset:** the tax pool of the jurisdiction in question, held as BTC/ETH reserve by Agent nodes.

**Stakeholder:** enrolled citizens who have paid tax forward via an Agent node.

**Performer:** elected politicians and, where specified in mandates, public servants and agencies tasked with delivery.

**Performance metric:** policy delivery as specified in each mandate's smart contract. Metric specification is the design hard problem at the individual mandate level and varies enormously by mandate type.

**Regulatory environment:** tax law governs the Agent-side fiat flow; electoral law governs the relationship to existing representative institutions. SCGP is explicitly designed to run in parallel with existing electoral systems, not to replace them.

**Time horizon:** varies by subspecies.

### 3.1 Municipal SCGP

Shortest timescales, cleanest oracles. Local service delivery, procurement, infrastructure maintenance, zoning. A pothole is filled or it is not. A permit is issued or it is not. A budget line is allocated to the specified program or it is not.

Municipal SCGP is the natural first-pilot venue for public-sector CGP. Oracle difficulty is low. Mandate cycle time is days to months. Regulatory environment is local-authority-scale, avoiding complex federal interactions. Participant cohorts are naturally bounded by geography and can be small enough to bootstrap without network-effect concerns.

Partnership candidates: existing participatory budgeting communities (Porto Alegre model, Barcelona model, and derivatives).

### 3.2 State/County SCGP

Medium timescales, mixed oracle difficulty. State legislative cycles, regional infrastructure, education and health policy at the state level, transport, land management. Oracles range from clean (was the legislation passed?) to complex (did the health outcome improve?).

Mandate cycle times track legislative sessions, typically months to years. PoR verification may require multi-stage milestones rather than binary delivery check.

### 3.3 Federal SCGP

Longest timescales, hardest oracles. National legislation, defence and foreign policy, macroeconomic management, federal taxation and spending. Many mandates involve outcomes that are disputed for decades — did a trade agreement benefit the country? Did a foreign intervention achieve its aims?

Federal SCGP is the last subspecies to pilot and the one where the oracle design challenge is most acute. Multi-source, multi-stage, and milestone-based PoR is likely mandatory rather than optional. Partial-delivery handling (Open Question 10 in the Core Protocol) matters most here.

Federal deployment benefits from lower-subspecies experience. Municipal and State deployments will generate the oracle-design patterns Federal requires.

---

## 4. Corporate CGP (CCGP)

Stakeholder governance inside private-sector organisations. Anchored to profit pool or performance-bonus reserve, serving employees, shareholders, or a defined hybrid, rewarding management for delivering on stakeholder mandates.

**Anchor asset:** the profit pool or a dedicated performance-bonus reserve, held as BTC/ETH or as the corporation's working capital in the corporation's functional currency.

**Stakeholder:** employees, shareholders, or a specified hybrid. In employee-owned or cooperative-adjacent firms, stakeholders are employees. In investor-governed firms, stakeholders may be shareholders with voting rights augmented by employee participation. Hybrid designs are explicitly supported.

**Performer:** executive management, department leaders, and, where mandates specify, individual staff with delivery authority.

**Performance metric:** corporate KPIs that the firm's existing audit infrastructure already verifies. Revenue targets, delivery milestones, employee satisfaction metrics, compliance outcomes, customer metrics. Oracle difficulty is much lower than SCGP because corporations have extensive pre-existing audit and reporting infrastructure.

**Regulatory environment:** corporate governance framework (bylaws, articles of association), securities law where shareholders are stakeholders, employment law. Crucially, adoption does not require legislative change — a corporation can adopt CCGP via bylaw amendment with board and shareholder approval.

**Time horizon:** weeks to months for most mandates. Fast cycle times enable rapid iteration of the protocol itself.

### 4.1 Why CCGP Is Likely First to Scale

Three properties combine to make CCGP the fastest-scaling variant.

Oracle cleanliness. Corporate deliverables are instrumented for audit as a condition of existing operation. Financial systems, compliance reporting, customer metrics, employee surveys — all feed directly into PoR verification with minimal additional infrastructure.

Regulatory brevity. The legal path from decision-to-adopt to running-deployment is weeks to months in CCGP, versus years in SCGP. No parliament, no electoral commission, no tax office.

Revenue potential. CCGP deployment is a paid licensed service. The CGP governance body (see `CGP_Governance_v0_4.md`) can fund the development of the protocol itself through corporate licensing without depending on grants or public-sector adoption.

These properties suggest CCGP is both the first field test at scale and the principal early revenue source for the project. The SCGP Core Protocol inherits the benefit, because every CCGP deployment stress-tests the shared phylum-level mechanics.

### 4.2 CCGP-Specific Considerations

Management captured as performer class rather than stakeholder class is the key design inversion from SCGP. In SCGP, the politician is rewarded for delivery. In CCGP, executives are rewarded for delivery — but executives are also structurally powerful in a way politicians in a pre-CGP state are not. CCGP must prevent management from capturing the stakeholder layer by covertly coordinating employee votes, manipulating PoD thresholds, or gaming KPI definitions.

The triadic structure, equal-share dividends, and transparency requirements all work against this, but CCGP deployments should also consider employee-representative Agent nodes distinct from corporate treasury to preserve triadic separation.

Shareholder-stakeholder and employee-stakeholder hybrids raise weighting questions that SCGP does not. A 50/50 hybrid, an equity-weighted shareholder portion with equal-share employee portion, or separate mandate classes for each stakeholder type are all reasonable design choices. The variant does not mandate a single answer; it requires that whatever answer is chosen be specified in the corporate bylaws and operationally transparent.

---

## 5. Non-profit CGP (NCGP)

Mission-aligned governance inside non-profit organisations. Anchored to donations, grants, or combined funding, serving donors and beneficiaries, rewarding staff and program leaders for delivering on mission mandates.

**Anchor asset:** donations, grants, or combined funding pool, held as BTC/ETH reserve.

**Stakeholder:** donors, beneficiaries, or both, depending on the non-profit's design choice. Some non-profits are donor-governed (a donor-advised structure); some are beneficiary-governed (a user-led structure); some are hybrid. Each is a valid NCGP configuration.

**Performer:** programme managers, staff, and external contractors whose delivery is verifiable against the mission metric.

**Performance metric:** programme outputs as defined by the non-profit's mission. Meals delivered, students tutored, shelter-nights provided, research papers published, advocacy targets achieved. Many non-profits already instrument these metrics for reporting to funders, so the PoR oracle frequently already exists.

**Regulatory environment:** charitable-status regulations in the relevant jurisdiction, donor transparency requirements, grant compliance obligations. Compatible with CGP's transparency-as-safety-property principle.

**Time horizon:** varies widely. Small programme cycles may be weeks; strategic research may be years.

### 5.1 NCGP as AI/DAO Agent Field Test

Small non-profits are candidates for the first deployment of a fully autonomous AI/DAO Agent, rather than the human-tax-agent progression appropriate to SCGP.

Three reasons combine:

Economics. Small non-profits cannot afford human tax-agent-equivalent intermediaries. The commission absorbed by a human Agent would consume most of the available surplus. An AI/DAO Agent runs at marginal cost.

Verifiability. Mission metrics are often already machine-measurable — meals counted, shelter-nights logged, research papers DOI-verifiable. The oracle problem that makes AI agents risky in SCGP is attenuated in NCGP.

Stakes. Failure modes in small NCGP deployments are bounded. A miscounted meal or an incorrectly verified shelter-night has consequences, but they are operational rather than constitutional.

NCGP is therefore the recommended venue for field-testing the Version 1 AI Agent described in Core Protocol Section 10.2. Evidence gathered here informs when — or whether — AI Agents become appropriate for higher-stakes variants.

### 5.2 NCGP-Specific Considerations

Donor-governed versus beneficiary-governed models produce structurally different token dynamics. Donor-governed NCGP resembles SCGP with the donor as citizen: the person funding the system holds the deliberative stake. Beneficiary-governed NCGP inverts this: the recipient of the service holds the stake, while donors fund without directly controlling mandates.

Both are legitimate. Donor-governed NCGP aligns reward with payer preference; beneficiary-governed NCGP aligns reward with recipient preference. The choice depends on the non-profit's mission and its theory of accountability.

Hybrid designs — a split between donor mandates and beneficiary mandates within a single non-profit — are possible but require explicit weighting in the bylaws.

---

## 6. Cooperative CGP (CoopCGP)

Member governance inside cooperative organisations. Anchored to member dues, serving cooperative members, rewarding elected officers for delivering on member mandates.

**Anchor asset:** member dues pool, held as BTC/ETH reserve.

**Stakeholder:** cooperative members, with the one-member-one-vote principle preserved from cooperative tradition regardless of financial contribution.

**Performer:** elected officers, paid staff, and contracted service providers.

**Performance metric:** cooperative outcomes as defined by the specific coop — member services delivered, prices maintained, community benefit provided, profits returned, sustainability metrics achieved.

**Regulatory environment:** cooperative registry regulations in the relevant jurisdiction, which typically mandate one-member-one-vote and prescribe governance structures that CGP must conform to rather than override.

**Time horizon:** seasonal to annual, aligned with cooperative reporting cycles.

### 6.1 CoopCGP-Specific Considerations

Cooperative regulations in most jurisdictions mandate one-member-one-vote for significant decisions. CGP's equal-share dividend mechanism is already aligned with this principle. Bid percentages apply to individual members' coin holdings, which are themselves already equal at the vote level. Wealth differentials within a cooperative come from dues history and service usage, not from investment class.

CoopCGP is in many respects the gentlest CGP variant to deploy, because cooperative culture already aligns with CGP's anti-plutocracy principles. It is an under-recognised first-pilot candidate alongside municipal SCGP.

---

## 7. Cross-Variant Considerations

### 7.1 Can a Corporation Participate in SCGP?

Yes, in at least two distinct roles. First, as a PAYG intermediary — the corporation as employer holds tax aside for its employees and may take the SCGP Agent role itself, earning the agent's commission on facilitation. Second, as a stakeholder via its owners or employees acting as citizens in the external SCGP system, not the corporation itself.

A corporation cannot hold Citizen Coin directly in SCGP. Citizen Coin is bound to individual tax liability, and corporations do not have civic stake in the democratic sense. Attempted corporate holding of Citizen Coin is a capture vector that SCGP must guard against explicitly at the protocol level.

### 7.2 Can a Non-profit Participate in CCGP or SCGP?

Yes, with the same role-separation as corporations. A non-profit may run internal NCGP for its own governance while also interacting with SCGP as an entity subject to regulation and benefitting from mandated programmes.

### 7.3 Regulatory Interaction

Variants interact with different regulatory frameworks that may constrain design choices. The phylum-level invariants are designed to be preserved across regulatory regimes, but specific adaptations may be required.

SCGP interacts with tax law and electoral law — the relationship to existing representative institutions is a live ongoing negotiation, and the protocol is designed explicitly to operate in parallel rather than to challenge formal electoral authority.

CCGP interacts with securities law where shareholders are stakeholders, and with employment law universally. Token rewards to employees may trigger securities-regulation concerns in some jurisdictions; compensation-regulation concerns in others.

NCGP interacts with charitable-status regulations, donor-transparency requirements, and grant-compliance obligations. The transparency property of CGP is typically aligned with these requirements rather than in tension with them.

CoopCGP interacts with cooperative registry regulations, which vary substantially by jurisdiction. Some jurisdictions mandate specific governance structures that CGP must fit within rather than override.

Cross-variant regulatory interaction — a single entity participating in multiple CGP variants — is an open design question. It is likely that clean role separation (the corporation's SCGP role is distinct from its internal CCGP role) is the baseline answer, with specific edge cases requiring bespoke analysis.

### 7.4 Inter-variant Token Compatibility

Whether tokens from one variant are redeemable or tradeable with tokens from another is an open question. Default assumption: variants are cryptographically isolated. Citizen Coin from one jurisdiction's SCGP is not the same asset as Citizen Coin from another jurisdiction's SCGP, and is definitely not the same as employee-stakeholder tokens from a CCGP deployment.

Bridging mechanisms may be valuable at the reserve level — BTC/ETH reserves are already fungible across variants and jurisdictions. Token-level bridging introduces complexity and attack surface that should be justified by specific use cases rather than permitted by default.

---

## 8. Future Variants

The four variants named here are not exhaustive. Candidates for future exploration include:

**Academic CGP** — university governance with researchers as stakeholders, institution funding as anchor, tenure and research delivery as performance metrics.

**Open-source project CGP** — contributor governance for major open-source projects, with commit rights and project direction as deliberative stakes.

**Professional-association CGP** — governance of professional standards bodies, with member dues as anchor and professional-standards outcomes as metrics.

**Regional-consortium CGP** — supra-national or supra-state governance for problems that exceed single-jurisdiction scope (climate, cross-border infrastructure, migration).

These are flagged as possibilities rather than specified. Any that achieve specification will be added as additional sections here or as separate documents.

---

## 9. Closing

The variant structure reflects a design philosophy: the protocol is phylum-level; its applications are species-level adaptations. The phylum survives because the invariants are mathematically enforced; the species adapt to the environment they are deployed in.

No single variant defines CGP. Each variant contributes evidence, pressure, and feedback to the others. Corporate deployments will generate cryptoeconomic stress data that SCGP pilots can absorb. Non-profit deployments will generate AI Agent evidence that corporate and state deployments can learn from. Municipal SCGP pilots will generate oracle-design patterns that state and federal deployments will need.

Running the variants in parallel rather than in linear sequence is the strongest deployment strategy. Each reinforces the others. None has to succeed first for the others to proceed.

---

*This document will evolve as variant deployments generate empirical evidence. Collaborators with specific domain expertise — corporate governance, non-profit management, cooperative organising, academic administration — are particularly welcome to propose refinements or entirely new variants.*
