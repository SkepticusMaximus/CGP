# Contributing to the Consensus Governance Protocol (CGP)

First, thank you for considering contributing to CGP. This project is an attempt to build grassroots democratic infrastructure sized for the challenges of the AI era. It cannot be built by one person, and it cannot be built in secret.

This document outlines how you can contribute, what kind of expertise is currently needed, and the process for proposing changes to the protocol specification.

## 1. Where We Are Now (Phase 0)

As of April 2026, CGP is in **Phase 0: Specification**. 

The v0.4 document suite defines the architecture, the token mechanics, the application variants, and the intended governance structure. **Implementation has not yet begun.**

We are currently seeking peer review of the architecture, game-theoretic stress testing of the token mechanics, and collaborators interested in building the first proofs-of-concept.

## 2. Expertise Actively Sought

We need people who can break the design and people who can build the components. Specifically:

*   **Cryptoeconomists & Game Theorists:** To formalise the PoD threshold criteria and model the reciprocal supply dynamics of the Token Triarchy. Can the bid system be gamed? What is the optimal decay curve for the mandate expiry window?
*   **Solidity / Smart Contract Engineers:** To begin drafting the reference implementations for the escrow contracts, the PoD/PoR minting functions, and the reserve pool management.
*   **Usenet / NNTP Veterans:** To design the protocol extensions required to support cryptographic voting, token transaction events, and Nostr-style node discovery over NNTP.
*   **Legal & Regulatory Experts:** To map the compliance pathways for the CCGP (Corporate) and NCGP (Non-profit) variants, and to advise on the legal structure of the future Governance Body.
*   **Civic Tech Organisers:** To help design the first municipal SCGP pilot and connect the protocol to existing participatory budgeting communities.
*   **Front-end Developers:** To begin sketching the client layer — the newsreader/voting UI that citizens will actually interact with.

## 3. How to Contribute

### Discussing the Architecture
Until the dedicated Usenet newsgroup (`alt.politics.cgp`) is established, architectural discussion takes place in the GitHub Issues and Discussions tabs of this repository. 

If you find a flaw in the token mechanics, open an Issue. If you have a question about how a specific variant would work in practice, start a Discussion.

### Proposing Changes to the Documents
The documents in the `/docs` directory are the canonical source for the protocol. 

1.  **Minor fixes** (typos, formatting, clarity improvements): Submit a Pull Request directly.
2.  **Substantive architectural changes:** Please open an Issue first to discuss the proposed change. If the consensus is that the change improves the protocol, you will be invited to submit a Pull Request modifying the relevant section of the Core Protocol or Application Variants document.

*Note: The formal Amendment Process described in the Governance document will take effect once the Governance Body is established. During Phase 0, we are operating on rough consensus among active contributors.*

## 4. Design Philosophy for Contributors

When proposing changes or writing code for CGP, please keep the Phylum-Level Invariants in mind:

1.  **Constituent primacy:** The system serves the citizen/stakeholder, not the politician/manager.
2.  **Triadic balance:** Do not propose bilateral token exchanges. The three-token structure is load-bearing.
3.  **Transparency as safety property:** Every contract and every vote must be human-readable without AI assistance. Do not introduce black-box adjudication.
4.  **Free speech absolutism:** The discussion layer must remain uncensored and distributed.

## 5. Code of Conduct

Participation in this project is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). We are building infrastructure for democratic deliberation; our own deliberation must model the respect and rigor we expect the protocol to support.

---

*Stevo (SkepticusMaximus)*  
*Adelaide, South Australia*
