# CGP Core Protocol
## Consensus Governance Protocol — Architecture Specification

**Document Version:** v0.4
**April 2026**

**Author:** Stevo (SkepticusMaximus)
**License:** GPL v3 (intended)
**Status:** Specification. Implementation not yet begun.

---

## Preface

This document specifies the Consensus Governance Protocol (CGP) at the phylum level. It describes mechanics, invariants, and relationships common to every CGP instantiation regardless of domain. Domain-specific adaptations — State, Corporate, Non-profit, Cooperative — are catalogued in the companion document `CGP_Application_Variants_v0_4.md`. The institutional body that stewards this specification is described in `CGP_Governance_v0_4.md`.

This document is intended to be stable and citable. Revisions will be version-numbered and accompanied by explicit change notes. Implementers should target a specific version and declare their compliance in reference to it.

---

## 1. The Problem

Representative democracy as currently practised produces mandate poverty — a single binary vote every three or four years about who rules rather than how they serve; granularity failure with no mechanism for citizens to express policy preference with meaningful resolution; inverted authority in which citizens cede agency to a ruling class and recover it only briefly at election time; trivial capture by organised money, party machines, and media monopolies; and an alignment vacuum in which no feedback loop connects politician behaviour to citizen preference between elections.

Standard voting reform addresses the aggregation method but leaves frequency, granularity, and authority inversion untouched. CGP addresses all four.

The target is not to abolish representative institutions but to render them secondary to a continuously-operating grassroots mandate layer. Elections become ratification rituals for policies already decided by the constituents they affect. Politicians become managers of implementation rather than originators of direction.

---

## 2. Design Principles

1. **Constituent primacy** — citizens are the source of mandate, not consumers of it. Politicians serve; they do not lead.
2. **Continuous mandate** — democratic authority is generated ongoingly at policy resolution, not periodically at personnel resolution.
3. **Cryptographic anchoring** — mandate and its execution are recorded on a public blockchain; legitimacy is auditable by anyone.
4. **Triadic balance** — three interdependent token classes model governance like Ohm's Law: a closed system of reciprocal variance with no dominant party and no bilateral collapse into bribery.
5. **Free speech absolutism** — discussion is uncensored. Accountability is carried by reputation and stake, not moderation.
6. **Redundancy not abolition** — the system makes elections redundant by generating superior mandate legitimacy, not by legally replacing them.
7. **Transparency as safety property** — every contract, every vote, every ratification event must be human-readable without AI assistance. AI may interpret or translate but must never be the only path to understanding.
8. **Emergent accountability** — the token ratio between Poli Coin and Citizen Coin is itself a live signal of democratic health, readable by any observer without audit or interpretation.
9. **Directional routing, not surplus extraction** — the citizen's value proposition is not a new income stream but the ability to direct a portion of their existing tax liability toward outcomes they participated in mandating.

---

## 3. Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                   CLIENT LAYER                       │
│  Newsreader apps · Web UI · Mobile · AI interface   │
└───────────────┬─────────────────┬───────────────────┘
                │                 │
┌───────────────▼───────┐ ┌───────▼───────────────────┐
│    DISCUSSION LAYER   │ │      AI AGENT LAYER       │
│  NNTP / Usenet        │ │  Reads threads · Summarises│
│  Threaded policy      │ │  Stress-tests proposals    │
│  debate forums        │ │  Posts on @mention only    │
│  Human-to-human       │ │  INN bot / NNTP client     │
└───────────────┬───────┘ └───────┬───────────────────┘
                │                 │
┌───────────────▼─────────────────▼───────────────────┐
│               SOVEREIGN PROTOCOL LAYER               │
│  NNTP-ext + deliberate / bid / ratify event types    │
│  Nostr-style relay mesh for node discovery           │
│  Ethereum bridge for token transactions              │
└─────────────────────────┬───────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────┐
│                  TOKEN LAYER (TRIARCHY)              │
│  Citizen Coin ──► Agent Coin ──► Poli Coin ──► (back)│
│  Each pays exclusively for one other                 │
│  No bilateral trades permitted by protocol           │
└─────────────────────────┬───────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────┐
│              ETHEREUM BLOCKCHAIN BASE                │
│  Smart contracts · Escrow · PoD and PoR events       │
│  Token ledger · Reserve pool                         │
│  BTC/ETH reserve pool (tax fiat held as crypto)      │
└─────────────────────────────────────────────────────┘
```

---

## 4. The Token Triarchy

Three token classes, each redeemable exclusively for one other. No direct bilateral exchange permitted. The structure is modelled on Ohm's Law — a closed system of reciprocal variance that resists monopoly and gridlock by mathematical construction.

### 4.1 Citizen Coin

- **Held by:** enrolled citizens who have paid tax forward into an Agent node's reserve.
- **Represents:** directional claim on a portion of the holder's tax liability, generated by participation in deliberation.
- **Function:** participation proof and democratic stake.
- **Minted:** at Proof of Deliberation (PoD) events, as equal-share dividend among substantive deliberation participants in a mandate that has reached threshold.
- **Consumed:** at Proof of Ratification (PoR) events, when committed via bid to a successfully delivered mandate. Consumed Citizen Coin is destroyed; its value transfers to the Poli Coin minted for delivering politicians.
- **Appreciating:** held Citizen Coin accrues value through the system's emergent reciprocal supply dynamics against the Agent base. See Section 6.
- **Non-transferable in any meaningful sense:** its value is the participation. A proxy holder degrades the signal and cannot second-guess the citizen's detailed position in forum debate.
- **PAYG integration:** wage earners already forgo tax in advance via employer PAYG withholding. This maps cleanly — the employer holds tax aside and converts to Citizen Coin rather than remitting fiat directly. The employer may optionally take the Agent role to capture that value.

### 4.2 Agent Coin

- **Held by:** tax agents, accountants, or autonomous AI agents operating under regulatory conformance appropriate to their jurisdiction.
- **Represents:** escrow and liquidity services anchored to real fiat tax liability.
- **Function:** fractional-reserve bank for the system; middleman between crypto and fiat at tax time.
- **Pays for:** Poli Coin minting at PoR events.
- **Smart contract role:** Ethereum contracts define deliverable conditions. The agent holds the reserve; contracts trigger Poli Coin minting automatically on verified PoR.
- **Reward:** fixed commission or proportional commission on tax facilitation, paid from the tax flow at redemption time. Non-speculative. Comparable to existing tax-agent fees, and themselves tax-deductible where applicable.
- **Liquidity:** the agent provides real-world exchange function — converting crypto credit to fiat on the way to the tax office.

### 4.3 Poli Coin

- **Held by:** delivering politicians, via email-derived paper wallets that exist whether the politician is aware of the system or not.
- **Represents:** reward for verified policy implementation.
- **Function:** performance-based political incentive, paid in an appreciating crypto-asset that the holder is free to hold or redeem for fiat at their discretion.
- **Minted:** at PoR events, in amount equivalent to the aggregate Citizen Coin bid against the ratified mandate. Distributed as equal share among politicians who formally committed to the mandate during its delivery phase.
- **Non-speculative role in operations:** the politician draws no fiat from the operational budget. Value is derived from appreciation of the token itself, funded by the surplus generated by the system's reciprocal supply dynamics.
- **Opt-in via commitment, opt-out via non-participation:** politicians are not required to participate. Those who commit during the delivery phase share in the reward if the mandate ratifies; those who do not commit receive nothing. The reward for committed participants is larger when others abstain.
- **Bounded:** aggregate Poli Coin value in fiat terms cannot exceed the surplus fraction above the underlying tax pool. Per-unit count floats; total fiat-equivalent value is bounded by the Ohm's Law relationship.

### 4.4 The Ohm's Law Relationship

```
Citizen Coin  (Voltage / E)     — the driving potential, the stake
Agent Coin    (Current / I)     — the flow, the liquidity function
Poli Coin     (Resistance / R)  — the load, where work is extracted
Total fiat    (Wattage / P=E×I) — the economic denominator
```

The directional flow in the architecture diagram (`Citizen ──► Agent ──► Poli ──► back`) describes the token circulation path — who pays whom. The Ohm's Law formula describes the interdependence relationship — how the three quantities mutually constrain each other. These are two views of the same system: one showing the direction of flow, the other showing the balance of forces.

Crucially, none of the three token values are fixed in absolute terms. In a real electrical circuit, the grid supplies whatever local voltage is — 110V, 230V, 415V — and current and resistance adjust proportionally. The wattage consumed is the product, and that is what the electricity bill measures. The grid does not cap watts by fixing voltage; it charges for consumption.

Applied to CGP: the fiat tax pool in a given jurisdiction is whatever it is in that jurisdiction for that period. Citizen, Agent, and Poli Coin can all float in absolute supply and in unit value, as long as their relative proportions maintain the equation. There is no hard unit cap on Citizen or Poli Coin. What is constrained is their combined value expressed in fiat terms, which is always proportional to the Agent Coin base, which is always proportional to the actual tax pool.

Three-way systems resist monopoly and gridlock by construction. Two-party trades are polite bribes. The compulsory third party ensures at least one other party's interests are always served.

### 4.5 The Reserve Pool

Tax fiat underlying Agent Coin is held as BTC, ETH, or a crypto-basket stablecoin rather than depreciating fiat. This provides both inflation resistance for the reserve and the appreciation differential that funds the surplus pool from which Poli Coin derives value. Reserve appreciation between PoD and PoR events is one of the four surplus sources catalogued in Section 7.

The reserve also requires a hedging mechanism at tax redemption time, because crypto volatility over short windows can exceed the margin available for commission. Hedging design is an open question (Section 11).

---

## 5. Proof of Deliberation (PoD) and Proof of Ratification (PoR)

Two distinct consensus events anchor the protocol. They fire at different moments in the mandate lifecycle and serve different functions.

### 5.1 Proof of Deliberation

PoD is the point at which a policy mandate is declared as having survived open debate meeting defined thresholds. At PoD, Citizen Coin is minted fresh to participating citizens as equal-share dividend, independent of the size of their subsequent bid commitment.

Concept: base tokens may only be minted when a policy proposal has survived open debate. New currency represents ratified democratic will rather than arbitrary issuance.

The mathematical insight: PoD is structurally equivalent to neural network training. The forward pass is the accumulation of discussion and votes toward mandate declaration. The backward pass is the propagation of legitimacy back to participants who contributed meaningfully to the outcome. The loss function measures divergence from collective deliberation. The weights being updated are participants' standing in the network.

Where Proof of Work rewards compute, and Proof of Stake rewards capital, Proof of Deliberation rewards meaningful participation in the discussion that produced a decision. Meaningfulness is defined by the network's own learning process rather than by any external rule or authority.

Threshold criteria (to be formalised):
- Minimum debate depth — thread length and reply diversity.
- Multi-participant engagement above quorum.
- AI-audited coherence and stress-test completion.
- Formal mandate declaration passing the appropriate polling mechanism.

Capture resistance: PoW is dominated by whoever buys the most ASICs. PoS by whoever holds the most tokens. PoD is dominated by whoever participates most substantively in ongoing deliberation — and substantive participation cannot be automated by purchased compute or capital without producing detectable signal degradation.

### 5.2 The Bid Event

Between PoD and PoR, citizens may commit a percentage of their Citizen Coin holdings to a specific mandate's reward pool. Commitment moves the pledged coin to smart-contract escrow; it is not destroyed.

Percentage rather than absolute commitment is structural: it is automatically self-limiting (no citizen can commit more than 100%), and it is equitable in the sense that a holder of ten coins who commits 10% and a holder of a thousand coins who commits 10% are expressing the same intensity of preference relative to their stake.

The aggregate of all committed bids on a mandate becomes its price signal — the cumulative democratic weight behind the mandate, visible to politicians who are weighing which mandates to commit to delivering. A mandate with a large aggregate bid is high-priority, high-reward. A mandate with a thin bid is low-priority.

Bid commitment does not degrade the bidder's PoD dividend, which was minted at the earlier PoD event. The dividend is theirs regardless of subsequent bidding behaviour.

### 5.3 Proof of Ratification

PoR is the point at which the real-world deliverable specified in the mandate is verified as having been achieved. At PoR, the smart contract mints Poli Coin equivalent in fiat-value terms to the aggregate bid on the mandate, and distributes it equally among politicians who formally committed during the delivery phase. Escrowed Citizen Coin is consumed in the same event; its value transfers to Poli Coin.

The Poli mint amount is deterministic: sum of bids in Citizen Coin units × current per-unit fiat value of Citizen Coin. The same fiat value flows out as Poli Coin at the current per-unit Poli value. Per-unit Poli supply increases; per-unit value adjusts according to the ongoing reciprocal supply dynamic described in Section 6.

Oracle verification of real-world deliverables is the hard problem in PoR design. Smart contract conditions must be explicit, objective, and unambiguous. The oracle layer is a documented attack surface (Section 8) and its design must be explicit, diverse, and subject to the same transparency requirements as the contracts themselves.

### 5.4 PoR Failure and Mandate Expiry

Mandates carry a delivery-phase expiry set by citizens at the PoD stage. If the mandate is not ratified within the window, the smart contract dissolves: escrowed Citizen Coin is released back to bidders without dividend; Poli Coin is not minted.

Politicians who committed to the mandate during the delivery phase do not lose their commitment signature on-chain. The persistent record forms part of the reputational stake described in Section 5.5 — failed commitments are visible. Whether a formal cooldown, forfeiture of future participation rights, or purely reputational cost is the appropriate penalty is an open question (Section 11).

PoD dividend is retained by citizens regardless of PoR outcome. Citizens who bid on failed mandates recover their staked Citizen Coin. They have lost only opportunity cost — the chance to commit that percentage elsewhere during the lock period.

### 5.5 Commitment and the Politician's Stake

Politicians claim a share of the PoR reward only by signing a commitment event during the delivery phase, not after the fact. The commitment is public, on-chain, and non-retroactive.

This design choice avoids the oracle problem of measuring contribution post-hoc. Post-hoc contribution measurement would require judges — whether human or AI — whose discretion would itself be a capture surface. Commitment phase design sidesteps this entirely: the politician either committed before delivery or did not. Objective, unambiguous, auditable.

Free-rider protection is provided by the combination of commitment requirement and equal-share distribution. A politician who does not commit receives nothing. A politician who commits but contributes little shares the reward equally with more substantive contributors — but also shares any reputational cost if the mandate fails.

What the "reputational stake" actually consists of — forfeited claim on Poli Coin from other pending mandates, temporary lockout from future commitments, public signal to future deliberation, or combinations of these — is left open for collaborator design. Several reasonable answers exist; jurisdictional context may argue for different choices.

---

## 6. Emergent Dynamics

CGP requires no engineered inflation or deflation schedule. The value dynamics emerge naturally from the reciprocal supply relationship between Citizen Coin and Poli Coin against the Agent Coin anchor.

### 6.1 Reciprocal Supply

At any moment, the total value available to distribute is bounded by the surplus above the tax principal, held as Agent Coin reserve. More unratified mandates on the table means more Citizen Coin in circulation representing deliberative stake. Until those mandates are ratified, the Poli Coin side of the equation is thin, so each unit of Poli Coin is relatively scarce and therefore relatively valuable. When a wave of mandates ratifies, Poli Coin supply increases, distributing value to politicians who delivered, while per-unit Citizen Coin value dilutes as the mandates it represented are resolved.

The deflationary incentive to deliver early emerges naturally. The early politician captures a larger per-unit slice because there are fewer politicians at the table. The value is emergent, not engineered. No halving schedule, no arbitrary inflation curve.

This also means the system scales without parameter re-specification. The Bitcoin model requires periodic halvings hard-coded into the protocol. CGP requires only that the Ohm's Law relationship holds, and the system self-adjusts to its current activity level automatically.

### 6.2 The Token Ratio as Accountability Signal

The ratio between Poli Coin and Citizen Coin per-unit values is a live, continuously updated signal of the state of democratic health.

A high Poli-to-Citizen ratio means mandates are being ratified faster than citizens are generating new ones. The political class is performing; delivery is keeping pace with demand. A low Poli-to-Citizen ratio means citizens are generating mandates faster than politicians are delivering. The political class is underperforming; mandate backlog is growing.

Any observer with access to the on-chain ledger can read this signal in real time. No auditor is required, no interpretive layer, no trust in a reporting institution. The market itself prices the performance of the political class.

This property is not achievable in any engineered-schedule cryptoeconomic system. It is specific to reciprocal-supply systems with a fixed anchor, and it is a strong argument for the v0.4 design choice to eliminate engineered schedules entirely.

### 6.3 The Minting Formula and Its Timing Consequence

Because per-unit Citizen and Poli values float with the market cap, two mandates with identical fiat-value aggregate bids but ratified at different moments produce differently-valued Poli mints. This is a consequence, not a bug. It is the price signal working as intended: politicians who deliver during a cold period (few ratifications occurring) capture scarcer, more valuable Poli per unit; politicians delivering during a hot period capture Poli that is worth less per unit immediately but accrues value as the cycle cools.

A theoretical incentive exists for politicians to stall delivery until cold periods. In practice, this arbitrage is unreliable against the general upward trend of accumulated surplus, against parliamentary and coalition time pressure, and against the mandate expiry mechanism in Section 5.4. The combination is robust.

---

## 7. Where the Value Comes From

The CGP reward system is funded by real surplus, not by arithmetic sleight of hand. Four surplus sources, in descending order of Phase 1 reliability.

**Reserve appreciation.** Fiat underwriting Citizen Coin is held as BTC, ETH, or a crypto basket. The appreciation differential between PoD and PoR — typically weeks to months — is real value generated by the reserve itself, captured by the system rather than by the tax office or the employer's treasury. This is the cleanest mechanism and requires only that crypto outperforms depreciating fiat over governance-relevant timescales, which is empirically defensible over five-to-ten year windows.

**PAYG float.** Employers already hold tax aside for weeks or months before remitting. That float currently earns interest for employer or government. Redirecting it to the CGP reserve captures existing value without asking anyone to pay more.

**Productivity gain from better policy.** If CGP produces better outcomes, economic growth widens the tax base. Real, but long-term. Not Phase 1 evidence.

**Disintermediation savings.** Election campaigns, lobbying infrastructure, party machinery. Large dollar figures but only capturable at Phase 3+ when CGP begins displacing that apparatus.

The honest cost to the citizen is not new tax. It is reallocation of a portion of existing tax, plus modest opportunity cost on the PAYG float, in exchange for directional control over what that portion funds. Agent commission is small. The reserve's crypto holding accepts occasional volatility drag. The citizen's bank loses the small interest the tax float would otherwise have accrued.

Net: the citizen accepts modest transactional friction for the previously-absent property that their tax dollars route toward outcomes they helped mandate.

This is the correct pitch. It is not "earn crypto for voting." It is "direct your tax dollars to accountable outcomes, at the same cost as the tax you were going to pay anyway." The framing is grounded in existing tax flow rather than in speculative reward, which matters both ethically and tactically for public reception.

---

## 8. Corruption Resistance

CGP is designed against four capture modes.

**Bilateral bribery.** The triadic token structure forbids direct two-party exchange. Every transaction involves a third party with structurally different interests. Two-party trades are polite bribes; three-party systems resist this. The same structural property resists blackmail and the formation of ulterior motives: no two parties can conspire without the third party's interests being visibly unserved.

This is the principle the Australian Democrats once captured as "keeping the bastards honest" — the presence of a compulsory third vertex in every transaction prevents bilateral collusion. In formal terms, this relates to coalition theory in cooperative game theory, where the core of a three-player game can be structured so that no two-player coalition improves on the three-player outcome. Precise formalisation for CGP's token structure is an open question suited to game-theoretic modelling.

**Capital capture.** Token minting is anchored to deliberation and delivery, not to holdings. Accumulating Citizen Coin without participating produces no influence on new mandates. Accumulating Poli Coin without delivering produces no new mandates.

**Oracle capture.** The smart contract layer depends on oracle feeds to verify real-world PoR conditions. Whoever controls the feeds controls outcomes. Oracle design must be explicit, diverse, and subject to the same transparency requirements as the contracts themselves. Multi-source oracle design with independent verification paths is the baseline.

**Apathy capture.** The most dangerous failure mode for any governance system. Low participation produces low-quorum events captured by small coordinated groups. PoD specifically addresses this by rewarding participation itself via equal-share dividend, not mere voting. Critically, participants pay themselves: the value of the token derives from participation backed by future fiat tax obligation, paid forward. There is no external funding source — the reward is intrinsic to the act of deliberation, which aligns incentives without creating a dependency on any patron or treasury.

---

## 9. The Discussion Layer

CGP's discussion substrate is NNTP (Usenet), not a centralised web forum. The design choice is deliberate.

- **Distributed architecture** with no central point of capture.
- **Hierarchical threading** natively suited to policy debate.
- **Established newsreader ecosystem** — no new client required to participate in discussion, though voting and mandate input require separate added mechanisms and user interface facilities.
- **Proven protocol** at Internet scale for decades.
- **Inherent resistance** to corporate capture or platform death.

Extensions required: voting and polling message types, token transaction events, PoD and PoR events, blockchain anchoring of consensus snapshots, AI agent interface extensions.

A Nostr-style relay mesh provides node discovery and supplements NNTP for clients requiring modern transport. Existing newsreaders display threads normally; voting and ratification render as special message types.

A dedicated newsgroup — `alt.politics.cgp` — is envisaged as the canonical discussion hub at launch. This avoids any central authority over the discourse while giving a stable entry point.

Think of Hansard or the Congressional Record, except distributed: ubiquitous and available to all. Furthermore it is not read-only — it is a living participatory record of real-time proceedings. Not a few-to-many broadcast medium but many-to-many. Not a single-threaded linear document but a multi-threaded, branching, nested hierarchy of topical discussions. Not protected for participation by political classes but open for mutual voluntary cooperative access, peer-reviewed like open-source software or peer-reviewed science — applied to political discourse.

---

## 10. The AI Agent Layer

AI participates in CGP in three distinct roles, each with defined limits and transparency requirements.

### 10.1 AI as Usenet Participant

AI connects via standard NNTP client (bot). Operates speak-when-spoken-to — responds to `@mention`, does not inject into every thread. Clearly identified as AI via username/signature convention. Prevents overbearing presence while remaining available for summarisation, stress-testing, or fact-checking on request.

### 10.2 AI as Agent (Function, Not Actor)

The most sensitive role and the one where discipline matters most. The Agent role in the triarchy is a function — escrow, liquidity, adjudication against conditions — not an autonomous decision-maker.

Two versions were considered during design. The chosen version:

**Version 1 (adopted):** AI provides interpretability, translation, and navigation. Smart contracts define rigid bounds. The AI explains what a contract does to a citizen in plain language, flags anomalies, surfaces edge cases. It never decides anything. Adjudication happens in rule-space where it can be audited, forked, challenged, rolled back. The AI is a magnifying glass, not a judge.

**Version 2 (rejected):** AI with discretionary adjudication power, wrapped in DAO governance. Rejected because a discretionary AI adjudicator is a concentration of power — just one whose locus is in weights and training data rather than in a person. Worse, it is harder to reason about than a human bureaucracy. The whole point of CGP is to prevent illegitimate concentrations of power. An AI adjudicator with discretion reproduces the problem in more opaque form.

**Design principle:** the AI layer must never be the only path to understanding the system. Every contract a citizen interacts with must also be expressible in plain human-readable form that a person can audit without AI assistance. The moment citizens cannot check the AI's work without using another AI, the system has drifted from Version 1 to Version 2 regardless of original intent.

### 10.3 AI as Oracle

- Queries blockchain state and renders it in natural language.
- Produces reports on ratification status, token flows, policy delivery progress.
- Citizens may converse with AI about the state of any on-chain governance element.
- Provides accessible introspection without adding authority.

---

## 11. Technical Stack (Provisional)

| Layer | Technology |
|-------|-----------|
| Discussion | NNTP / INN (existing Usenet infrastructure) |
| Node discovery | Nostr relay mesh (as NNTP extension) |
| Smart contracts | Solidity on Ethereum |
| Token standard | ERC-20 variants with protocol-enforced transfer restrictions |
| Escrow | Ethereum smart contracts with time-lock and condition gates |
| Reserve pool | BTC/ETH or crypto-basket stablecoin |
| AI integration | NNTP bot client + LLM API (open-source preferred — Mistral, Llama family) |
| Client | Cross-platform app — newsreader + voting UI extension |

None of these choices is final. Each represents the current best fit, subject to revision as the ecosystem evolves.

---

## 12. Implementation Phases

v0.4 restructures the phased rollout around three parallel application tracks rather than a single linear State CGP progression. Variants catalogued in `CGP_Application_Variants_v0_4.md`; the Phase structure here applies across variants with track-specific adaptations.

**Phase 0 — Specification (current).** This document and successor drafts. Game-theoretic formalisation of PoD thresholds. Token economic modelling. Variant-specific adaptations drafted in the companion document.

**Phase 1 — Parallel proofs of concept.**
- CCGP track: corporate deployment with a willing private-sector partner. Smallest regulatory overhead, fastest path to revenue, real-world stress-testing. Likely first field test at scale.
- NCGP track: non-profit or cooperative deployment with machine-measurable mission metrics. Candidate venue for fully autonomous AI/DAO Agent field test.
- SCGP track: cold-start cohort of 10–100 participants running a non-binding municipal decision, with a human tax agent acting as Agent node. Meta-mandate structure: the cohort's first mandate is a petition for a performance-bonus margin to reward compliance.

**Phase 2 — Pilots at scale.** Main-net deployment with real stakes in each track. CCGP multi-corporation adoption. NCGP mid-size non-profit deployment. SCGP partnership with a participatory-budgeting community (Barcelona model or equivalent) as early adopters. Refinement of PoD thresholds from empirical data. Tax-agent integration for PAYG test case in a single jurisdiction.

**Phase 3 — Scale and displacement.** Multi-jurisdictional SCGP deployment. Formal engagement with electoral institutions as a parallel mandate source. Interoperability with civic tech infrastructure. In CCGP, standardisation across industry verticals. Politicians' income begins depending materially on delivery rather than incumbency.

**Phase 4 (aspirational).** Electoral-compensation model fully replaced by CGP performance rewards. Tax office's distributive function absorbed by the CGP pipeline. This is a long-horizon aspiration, not a design target for earlier phases.

---

## 13. Open Questions

The following require further design work or research. Items resolved since v0.3 have been removed; items added in v0.4 are flagged.

**Resolved since v0.3, for the record:**
- Poli Coin deflationary schedule (v0.3 Open Question 7) — resolved by the emergent dynamics design; no engineered schedule needed.
- Citizen dividend form (v0.3 Open Question 3) — resolved as equal-share Citizen Coin minting at PoD, directional rather than accumulative.

**Currently open:**

1. **Employer incentive for PAYG integration.** What makes the PAYG employer voluntarily convert tax float to Citizen Coin rather than holding fiat and earning interest? Agent Coin deflationary gain must exceed typical short-term interest rates.

2. **PoD threshold formalisation.** Exact criteria for sufficient deliberation. Needs game-theoretic modelling to resist gaming.

3. **Volatility at redemption.** BTC/ETH reserve requires a hedging mechanism at tax redemption time.

4. **Cold start bootstrap.** How does the first cohort onboard before network effects take hold? The meta-mandate structure is one candidate path; others may exist.

5. **Constitutional layer.** What determines whether unified consensus or bid/tender applies to a given class of decision?

6. **Cross-jurisdictional fiat bridge.** For an international protocol, how does the tax layer interact with multiple national fiat currencies and tax authorities?

7. **Privacy versus auditability.** Citizen votes and bids are public by default for audit. What privacy-preserving primitives — zero-knowledge proofs, bid mixing — can be introduced without compromising the transparency property?

8. **Politician reputational stake form.** *(new in v0.4)* The commitment mechanism in Section 5.5 is specified; the specific form of the reputational stake that binds commitment to delivery is left open. Candidates include forfeited claims on concurrent mandates, temporary lockout from future commitments, persistent public signal to future deliberation.

9. **Mandate expiry window duration.** *(new in v0.4)* Per-mandate citizen choice, jurisdiction default, or sliding scale by mandate complexity?

10. **Partial delivery handling.** *(new in v0.4)* Mandate 80% implemented — what gets minted? Binary PoR with partial-delivery arbitration, or graduated PoR with pre-specified milestone thresholds?

11. **Oracle federation design.** *(new in v0.4)* Multi-source oracle architecture, cross-verification protocols, dispute resolution when oracles disagree.

12. **PoD dividend cadence.** *(new in v0.4)* One mint event per mandate reaching PoD threshold, or periodic aggregation across a citizen's deliberation activity? Affects smart-contract design and citizen reward perception.

---

## 14. Relationship to Other Work

CGP is distinct from but adjacent to several existing currents.

**Liquid democracy** (delegative voting): CGP shares the continuous-mandate property but replaces delegation with direct participation rewarded by PoD.

**DAO governance**: CGP borrows smart-contract infrastructure but explicitly rejects governance-by-token-holdings as reproducing capital capture.

**Participatory budgeting** (Porto Alegre, Barcelona): CGP generalises the participatory approach from budget decisions to policy broadly and adds cryptographic permanence.

**Futarchy** (Hanson): CGP shares the mechanism-design orientation but anchors legitimacy in deliberation rather than prediction-market outcomes.

**Quadratic voting**: CGP achieves similar preference-intensity signalling but separates it from governance reward. Bid pool prices mandate priority; PoD dividend distributes reward equally. Two axes that do not interfere.

**Web3 "governance token" projects**: CGP rejects the single-token governance model that most Web3 governance has reproduced, which is effectively PoS under a different name.

The point of difference is the combination: triadic token structure, PoD and PoR as distinct consensus events, Usenet as discussion substrate, AI as interpreter-not-judge, all anchored in public blockchain, applicable across State, Corporate, Non-profit, and Cooperative variants. No existing project combines all of these.

---

## 15. Closing

It would be dishonest to end without acknowledging what this document is and is not.

It is not a finished system. It is a specification detailed enough to be criticised, not detailed enough to be compiled. The gap from here to a working pilot is substantial — months of economic modelling, smart-contract development, and community organising.

It is also not a guarantee against the concentration of power it aims to resist. Determined adversaries with enough resources can probably capture any governance system, given time. CGP aims to raise the cost of capture — particularly through its three-party structure, its anchoring of legitimacy in deliberation rather than capital, and its requirement that every element be human-readable without AI assistance — not to eliminate it.

What it is, is a serious attempt to sketch what grassroots democratic infrastructure might look like if built from scratch in the era we are now entering. It is an attempt to move from empire-shaped decision structures to structurally democratic ones, using the tools that are currently available to ordinary people.

The urgency is not rhetorical. A small number of well-resourced actors are moving fast. The asymmetry of capability between concentrated AI development and distributed democratic response is widening, not narrowing. Each year without a credible mandate-generation infrastructure is a year in which the question "who governs the consequences of AI" gets decided by default, by the actors with the loudest voices and the deepest pockets.

The question is not whether such infrastructure is possible. The question is whether it gets built in time.

Stevo
Adelaide, April 2026

---

*This document synthesises design sessions conducted across multiple AI-assisted conversations, including extended dialogues with Claude (Anthropic) and Manus AI. It represents the state of the CGP Core Protocol as of April 2026. Successor versions will incorporate feedback from collaborators, results from formal modelling, and lessons from early prototype implementations.*
