
# Consensus Governance Protocol (CGP)
## A Framework for Constituent-Led Digital Democracy

**White Paper Draft v0.3**
**April 2026**

**Author:** Stevo (SkepticusMaximus)
**Location:** Adelaide, South Australia
**License:** GPL v3 (intended)
**Status:** Architecture specification. Implementation not yet begun.

---

## Preface: Why Now

This document describes a protocol for grassroots democratic governance designed to address a specific and rapidly closing window. A small number of AI companies and their principals are moving to concentrate unprecedented economic, scientific, and military decision-making power in the hands of a few dozen people. Their stated intention is to build systems that can automate all cognitive labour, dominate markets, and — by their own private admission — make themselves indispensable to any future society.

The structural problem is not whether any individual CEO has good values. As Karen Hao articulated in her April 2026 interview with Steven Bartlett: "The bigger question is... is the governance structure that we've created a sound one... or an anti-democratic one that has consolidated this decision-making power in the hands of the few. Because no person is perfect. It does not matter who is at the top of these companies. They're not going to have the ability to make decisions on behalf of so many people around the world who live and talk and have a culture and history that are fundamentally different from them without things going wrong. And so that is why throughout history we've moved from empires to democracy. It's because empire as a structure is inherently unsound."

Existing representative democracy offers an inadequate counter. A single binary vote every three or four years cannot match the resolution or speed of decision-making that AI-empowered centralised actors are now capable of. The machinery of consent is too slow, too coarse, and too easily captured.

CGP is an attempt to build governance infrastructure sized for the challenge: continuous, policy-level, grassroots, cryptographically anchored, and structurally resistant to the capture modes that have disabled previous attempts. It can be thought of as a perpetual and ubiquitous multi-faceted referendum, about any subject that can form political policy and especially pertinent to any matter which may become subject to legislation. It potentiates a reward system, providing motives for all stakeholders to participate in and comply with citizen-mandated policy and legislation. We can thereby be governed by laws to which we consent, and politicians become what management staff are to company shareholders.

This paper describes the protocol as currently designed. It is not a finished system. It is a skeleton detailed enough to criticise, implement, or improve.

---

## 1. The Problem

Representative democracy as currently practised produces:

- **Mandate poverty** — a single binary vote every 3–4 years about *who rules*, not *how they serve*.
- **Granularity failure** — no mechanism for citizens to express policy preference with meaningful resolution.
- **Inverted authority** — citizens cede agency to a ruling class and recover it only briefly at election time.
- **Capture** — electoral systems are trivially captured by organised money, party machines, and media monopolies.
- **Alignment vacuum** — no feedback loop connects politician behaviour to citizen preference between elections.

Standard voting reform (proportional representation, preferential voting, etc.) addresses the *aggregation method* but leaves the *frequency, granularity, and authority inversion* untouched. CGP addresses all four.

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

---

## 3. Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                   CLIENT LAYER                       │
│  Newsreader apps · Web UI · Mobile · AI interface   │
└───────────────┬─────────────────┬───────────────────┘
                │                 │
┌───────────────▼───────┐ ┌───────▼───────────────────┐
│    DISCUSSION LAYER    │ │      AI AGENT LAYER        │
│  NNTP / Usenet        │ │  Reads threads · Summarises│
│  Threaded policy      │ │  Stress-tests proposals    │
│  debate forums        │ │  Posts on @mention only    │
│  Human-to-human       │ │  INN bot / NNTP client     │
└───────────────┬───────┘ └───────┬───────────────────┘
                │                 │
┌───────────────▼─────────────────▼───────────────────┐
│               SOVEREIGN PROTOCOL LAYER               │
│  NNTP-ext + vote / bid / ratify event types          │
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
│  Smart contracts · Escrow · Ratification events      │
│  Token ledger · Proof of Deliberation minting        │
│  BTC/ETH reserve pool (tax fiat held as crypto)      │
└─────────────────────────────────────────────────────┘
```

---

## 4. The Token Triarchy

Three token classes, each redeemable exclusively for one other. No direct bilateral exchange permitted. The structure is modelled on Ohm's Law — a closed system of reciprocal variance that resists monopoly and gridlock by mathematical construction.

### 4.1 Citizen Coin

- **Held by:** every enrolled citizen
- **Represents:** future tax liability denominated in fiat
- **Function:** participation proof and democratic stake
- **Pays for:** Agent Coin (handed to agent/accountant in lieu of direct tax payment)
- **Key property:** non-transferable in any meaningful sense — its value *is* the participation. A proxy holder degrades the signal and cannot second-guess the citizen's detailed position in forum debate.
- **PAYG integration:** wage earners already forgo tax in advance via employer PAYG withholding. This maps cleanly — the employer holds tax aside and converts to Citizen Coin rather than remitting fiat directly. The employer may optionally take the Agent role to capture that value.

### 4.2 Agent Coin

- **Held by:** tax agents, accountants, or autonomous AI agents
- **Represents:** escrow and liquidity services
- **Function:** middleman between crypto and fiat at tax time; acts as an in-house token until redemption
- **Pays for:** Poli Coin (released to politicians on verified policy delivery)
- **Smart contract role:** Ethereum contracts define deliverable conditions. The agent holds funds in escrow; the contract releases Poli Coin automatically on verified satisfaction of conditions.
- **Liquidity:** the agent provides real-world exchange function — converting crypto credit to fiat on the way to the tax office. May be a human agent, an accounting firm, or a fully autonomous AI agent operating within rigid contract bounds.

### 4.3 Poli Coin

- **Held by:** participating politicians
- **Represents:** reward for verified policy implementation
- **Function:** performance-based political incentive
- **Pays for:** Citizen Coin (dividends back to citizens — completing the loop)
- **Key properties:**
  - Released only on smart contract satisfaction (verified delivery)
  - Subject to time limits — earlier acquisition yields greater deflationary gain
  - Shared among politicians who actually participate and deliver
  - Non-participation increases per-capita reward for those who engage
  - Politicians need not participate — but abstention makes the reward more lucrative for those who do
  - Cannot exceed the surplus fraction above general revenue contribution

### 4.4 The Ohm's Law Analogy

```
Citizen Coin  (Voltage / E)    — the driving potential, the stake
Agent Coin    (Current / I)    — the flow, the liquidity function
Poli Coin     (Resistance / R) — the load, where work is extracted

E = I × R  →  Citizen = Agent × Politician
```

Note: the directional flow in the architecture diagram (`Citizen ──► Agent ──► Poli ──► back`) describes the *token circulation path* — who pays whom. The Ohm's Law formula describes the *interdependence relationship* — how the three quantities mutually constrain each other. Neither can change without affecting the other two. These are two views of the same system: one showing the direction of flow, the other showing the balance of forces.

Three-way systems in nature resist monopoly and gridlock. Two-party trades are polite bribes. The compulsory third party ensures at least one other party's interests are always served. No party can be closed out; each has equitable stake.

### 4.5 The Reserve Pool

Tax fiat underlying Citizen Coin is held as BTC or ETH (or a crypto-basket stablecoin) rather than depreciating fiat. This provides both inflation resistance and alignment between the governance network and the broader crypto infrastructure on which it runs.

---

## 5. Proof of Deliberation (PoD)

A novel consensus mechanism anchoring token minting to verified democratic deliberation.

**Concept:** base tokens may only be minted when a policy proposal has survived open debate meeting defined thresholds. New currency represents ratified democratic will rather than arbitrary issuance.

**The mathematical insight:** PoD is structurally equivalent to neural network training. The *forward pass* is the accumulation of discussion and votes toward ratification. The *backward pass* is the propagation of legitimacy back to participants who contributed meaningfully to the outcome. The loss function measures divergence from collective deliberation. The weights being updated are participants' standing in the network. This is not a metaphor — it is the same mathematics.

Where Proof of Work rewards compute, and Proof of Stake rewards capital, Proof of Deliberation rewards *meaningful participation in the discussion that produced a decision*. Meaningfulness is defined by the network's own learning process rather than by any external rule or authority.

**Threshold criteria (to be formalised):**
- Minimum debate depth (thread length, reply diversity)
- Multi-token voter participation above quorum
- AI-audited coherence and stress-test completion
- Formal ratification vote passing the appropriate polling mechanism

**On-chain anchoring:** AI summarises mature threads into Consensus Snapshots committed to the blockchain as ratification events. Smart contracts trigger token release on verified PoD.

**Capture resistance:** PoW is dominated by whoever buys the most ASICs. PoS by whoever holds the most tokens. PoD is dominated by whoever participates most substantively in ongoing deliberation — and substantive participation cannot be automated by purchased compute or capital without producing detectable signal degradation.

---

## 6. The Discussion Layer (NNTP/Usenet)

CGP's discussion substrate is NNTP (Usenet), not a centralised web forum. Reasons:

- **Distributed architecture** with no central point of capture
- **Hierarchical threading** natively suited to policy debate
- **Established newsreader ecosystem** — no new client required to participate in discussion, though voting and mandate input require separate added mechanisms and user interface facilities
- **Proven protocol** at Internet scale for decades
- **Inherent resistance** to corporate capture or platform death

Extensions required:
- Voting/polling message types
- Token transaction events
- Ratification events
- Blockchain anchoring of consensus snapshots
- AI agent (bot) interface extensions

A Nostr-style relay mesh provides node discovery and supplements NNTP for clients that require modern transport. Existing newsreaders display threads normally; voting and ratification render as special message types.

 A dedicated newsgroup — `alt.politics.cgp` — is envisaged as the canonical discussion hub at launch. This avoids any central authority over the discourse while giving a stable entry point.

Think of Hansard or the Congressional Record, except it is distributed: ubiquitous and available to all. Furthermore it is not read-only — it is a living participatory record of real-time proceedings. It is not a few-to-many broadcast medium but many-to-many. It is not a single-threaded linear document but a multi-threaded, branching, and nested hierarchy of topical discussions. It is not protected for participation by political classes but open for mutual voluntary cooperative access, peer-reviewed like open-source software or peer-reviewed science — but in this case applied to political discourse.

---

## 7. The AI Agent Layer

AI participates in CGP in three distinct roles, each with defined limits and transparency requirements.

### 7.1 AI as Usenet Participant

AI connects via standard NNTP client (bot). Operates **speak-when-spoken-to** — responds to `@mention`, does not inject into every thread. Clearly identified as AI (username/signature convention). Prevents overbearing presence while remaining available for summarisation, stress-testing, or fact-checking on request.

### 7.2 AI as Agent (Function, Not Actor)

This is the most sensitive role and the one where discipline matters most. The Agent role in the triarchy is a *function* — escrow, liquidity, adjudication against conditions — not an autonomous decision-maker.

Two versions were considered during design. The chosen version:

**Version 1 (adopted):** AI provides interpretability, translation, and navigation. Smart contracts define rigid bounds. The AI explains what a contract does to a citizen in plain language, flags anomalies, surfaces edge cases. It never decides anything. Adjudication happens in rule-space where it can be audited, forked, challenged, rolled back. The AI is a magnifying glass, not a judge.

**Version 2 (rejected):** AI with discretionary adjudication power, wrapped in DAO governance. Rejected because a discretionary AI adjudicator *is* a concentration of power — just one whose locus is in weights and training data rather than in a person. Worse, it is harder to reason about than a human bureaucracy. The whole point of CGP is to prevent illegitimate concentrations of power. An AI adjudicator with discretion reproduces the problem in more opaque form.

**Design principle:** the AI layer must never be the only path to understanding the system. Every contract a citizen interacts with must also be expressible in plain human-readable form that a person can audit without AI assistance. The moment citizens cannot check the AI's work without using another AI, the system has drifted from Version 1 to Version 2 regardless of original intent.

### 7.3 AI as Oracle

- Queries blockchain state and renders it in natural language
- Produces reports on ratification status, token flows, policy delivery progress
- Citizens may converse with AI about the state of any on-chain governance element
- Provides accessible introspection without adding authority

---

## 8. Corruption Resistance

CGP is designed against four capture modes:

**Bilateral bribery:** the triadic token structure forbids direct two-party exchange. Every transaction involves a third party with structurally different interests. Two-party trades are polite bribes; three-party systems resist this. The same structural property resists blackmail and the formation of ulterior motives: no two parties can conspire without the third party's interests being visibly unserved. This is the principle the Australian Democrats once captured as "keeping the bastards honest" — the presence of a compulsory third vertex in every transaction prevents bilateral collusion. In formal terms, this relates to coalition theory in cooperative game theory, where the *core* of a three-player game can be structured so that no two-player coalition improves on the three-player outcome. The precise formalisation of this property for CGP's token structure is an open question suited to game-theoretic modelling.

**Capital capture (as in PoS):** token minting is anchored to deliberation, not to holdings. Accumulating Citizen Coin without participating produces no influence.

**Oracle capture:** the smart contract layer depends on oracle feeds. Whoever controls the feeds controls outcomes. Oracle design must be explicit, diverse, and subject to the same transparency requirements as the contracts themselves.

**Apathy capture:** the most dangerous failure mode for any governance system. Low participation produces low-quorum votes captured by small coordinated groups. Proof of Deliberation specifically addresses this by rewarding participation itself, not mere voting. Critically, participants pay themselves: the value of the token derives from participation backed by future fiat tax obligation, paid forward. There is no external funding source — the reward is intrinsic to the act of deliberation, which aligns incentives without creating a dependency on any patron or treasury.

---

## 9. Technical Stack (Provisional)

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

## 10. Implementation Phases

**Phase 0 — Specification (current)**
- This document and successor drafts
- Game-theoretic formalisation of PoD thresholds
- Token economic modelling

**Phase 1 — Proof of concept**
- Solidity contracts for the three token types
- Testnet deployment
- NNTP bot for basic thread summarisation
- Minimal newsreader extension for voting UI
- Cold-start experiment with a small cohort (10–100 participants) on a single non-binding decision

**Phase 2 — Pilot**
- Main-net deployment with real (low-stakes) governance decisions
- Partnership with an existing participatory-budgeting community (Barcelona model, or equivalent) as early adopters
- Refinement of PoD thresholds from empirical data
- Tax-agent integration for PAYG test case in a single jurisdiction

**Phase 3 — Scale**
- Multi-jurisdictional deployment
- Formal engagement with electoral institutions as a parallel mandate source
- Interoperability with existing civic tech infrastructure

---

## 11. Open Questions

The following require further design work or research:

1. **Employer incentive** — what makes the PAYG employer voluntarily convert tax float to Citizen Coin rather than holding fiat and earning interest? Agent Coin deflationary gain must exceed typical short-term interest rates.

2. **PoD threshold formalisation** — exact criteria for sufficient deliberation. Needs game-theoretic modelling to resist gaming.

3. **Poli Coin redemption** — what does the citizen actually receive as dividend? Governance weight, tradeable value, or fiat equivalent?

4. **Volatility at redemption** — BTC/ETH reserve requires a hedging mechanism at tax redemption time.

5. **Cold start bootstrap** — how does the first cohort onboard before network effects take hold? Which existing communities are candidate early adopters?

6. **Constitutional layer** — what determines whether unified consensus or bid/tender applies to a given class of decision?

7. **Poli Coin time limits** — expiry conditions and deflationary schedule need precise specification.

8. **Cross-jurisdictional fiat bridge** — for an international protocol, how does the tax layer interact with multiple national fiat currencies and tax authorities?

9. **Privacy versus auditability** — citizen votes are public by default for audit. What privacy-preserving primitives (zero-knowledge proofs, mixing) can be introduced without compromising the transparency property?

---

## 12. Project Identity and Call for Collaboration

- **Name:** Consensus Governance Protocol (CGP)
- **Repository:** `SkepticusMaximus/CGP` (GitHub — to be created)
- **License:** GPL v3 (intended)
- **Discussion:** `alt.politics.cgp` (Usenet newsgroup — to be established)
- **Contact:** via GitHub or Discord

**Expertise actively sought:**

- Cryptoeconomics — to formalise token interdependence equations and model incentive stability under adversarial conditions
- Solidity / smart contract development — for proof-of-concept implementations
- Policy design — for objective metric frameworks that smart contracts can evaluate
- Game theory — for PoD threshold modelling
- Usenet infrastructure — for discussion-layer protocol extensions
- Democratic theory — to stress-test the mandate model against existing political science
- Legal — to navigate tax-agent integration and regulatory frameworks
- Front-end development — for accessible citizen-facing client software

This is not a solo project in scope. It is presented here as a solo architectural proposal in order to give collaborators something concrete to push against. The design is deliberately more detailed than a manifesto because manifestos generate enthusiasm without implementation; detail generates critique, which generates improvement.

---

## 13. Relationship to Other Work

CGP is distinct from but adjacent to several existing currents:

- **Liquid democracy** (delegative voting): CGP shares the continuous-mandate property but replaces delegation with direct participation rewarded by PoD.
- **DAO governance**: CGP borrows smart-contract infrastructure but explicitly rejects governance-by-token-holdings as reproducing capital capture.
- **Participatory budgeting** (Porto Alegre, Barcelona): CGP generalises the participatory approach from budget decisions to policy broadly and adds cryptographic permanence.
- **Futarchy** (Hanson): CGP shares the mechanism-design orientation but anchors legitimacy in deliberation rather than prediction-market outcomes.
- **Web3 "governance token" projects**: CGP rejects the single-token governance model that most Web3 governance has reproduced, which is effectively PoS under a different name.

The point of difference is the combination: triadic token structure, PoD as consensus, Usenet as discussion substrate, AI as interpreter-not-judge, all anchored in public blockchain. No existing project combines all five.

---

## 14. Closing

It would be dishonest to end without acknowledging what this document is and is not.

It is not a finished system. It is a specification detailed enough to be criticised, not detailed enough to be compiled. The gap from here to a working pilot is substantial — months of economic modelling, smart-contract development, and community organising.

It is also not a guarantee against the concentration of power it aims to resist. Determined adversaries with enough resources can probably capture any governance system, given time. CGP aims to raise the cost of capture — particularly through its three-party structure and its anchoring of legitimacy in deliberation rather than capital — not to eliminate it.

What it is, is a serious attempt to sketch what grassroots democratic infrastructure might look like if built from scratch in the era we are now entering. It is an attempt to move from empire-shaped decision structures to structurally democratic ones, using the tools that are currently available to ordinary people.

The urgency is not rhetorical. A small number of well-resourced actors are moving fast. The asymmetry of capability between concentrated AI development and distributed democratic response is widening, not narrowing. Each year without a credible mandate-generation infrastructure is a year in which the question "who governs the consequences of AI" gets decided by default, by the actors with the loudest voices and the deepest pockets.

The question is not whether such infrastructure is possible. The question is whether it gets built in time.

Stevo
Adelaide, April 2026

---

*This document synthesises design sessions conducted across multiple AI-assisted conversations. It represents the state of the Consensus Governance Protocol architecture as of April 2026. Successor versions will incorporate feedback from collaborators, results from formal modelling, and lessons from early prototype implementations.*
e Protocol
