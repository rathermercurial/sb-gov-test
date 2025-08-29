---
title: Proposal Archive Template
description: >-
  Template for creating standardized proposal archive pages within the SuperBenefit DAO
  governance repository
---

This template provides a standardized approach for creating archive pages for proposals submitted to SuperBenefit DAO governance. Consistent archival practices support transparency and institutional memory by preserving the complete context of governance decisions.

## Understanding Proposal Archives

Proposal archives serve as the permanent record of our collective decision-making processes. They preserve not only the outcomes of votes but the reasoning, discussion, and implementation context that shaped each decision. This comprehensive documentation enables future participants to understand how governance has evolved and provides accountability for approved decisions.

Effective proposal archives capture the full governance lifecycle from initial proposal through implementation and evaluation. By maintaining consistent documentation standards, we create a valuable resource for understanding how our community makes decisions and learns from experience.

## Required Documentation Elements

Each archived proposal should include the essential information needed to understand the decision context and outcomes. The following elements provide the foundation for comprehensive proposal documentation.

### Proposal Identification

**Title**: The complete proposal title as submitted for governance consideration. Include any proposal numbering or categorization used in your governance system.

**Description**: A concise summary that captures the essence of the proposal in a single sentence. This helps readers quickly understand the proposal's purpose and scope.

**Author(s)**: The individual(s) or group(s) who developed and submitted the proposal. This attribution provides context about proposal origins and enables follow-up discussions.

### Discussion and Voting Context

**Discussion Forum**: Link to the primary location where proposal discussion occurred. This might include forum threads, chat channels, or collaborative workspaces where community members engaged with the proposal.

**Voting Platform**: Link to the voting interface where the proposal was submitted for community decision. While many DAOs use Snapshot, include whatever platform was actually used for the specific proposal.

**Submission Date**: When the proposal was formally submitted for voting. This provides temporal context for understanding the proposal within broader governance timelines.

### Decision Outcomes

**Voting Results**: The complete breakdown of voting outcomes, including vote counts or percentages for each option. Present this information clearly to demonstrate the level of community support or opposition.

**Final Decision**: The official outcome (Approved, Rejected, Withdrawn, etc.) with any relevant context about implementation requirements or next steps.

**Implementation Status**: Current status of approved proposals, including progress updates and completion indicators. This connects governance decisions to actual organizational changes.

## Archive Page Structure

### Header Information

Begin each archive page with clear identification and context:

```markdown
# [Proposal Title]

[Brief description of proposal purpose and scope]

**Proposed by**: [Author name(s)]  
**Submitted**: [Date]  
**Status**: [Current status with appropriate emoji indicator]

[🗣️ Discussion Forum](link-to-discussion)  
[📊 Voting Platform](link-to-voting-page)
```

### Proposal Content

Include the complete original proposal text to preserve the exact language considered by the community. This section should contain the full proposal as submitted, maintaining original formatting where possible.

When proposals were substantially revised during discussion, consider noting significant changes or linking to earlier versions to provide complete context about how the proposal evolved.

### Voting Results

Present voting outcomes clearly and completely:

```markdown
## Voting Results

**Outcome**: [Final decision] ✅/❌/⚠️  
**Vote Breakdown**: [Detailed vote counts/percentages]  
**Participation**: [Voting participation metrics if available]
```

Use clear formatting and visual indicators to make results immediately apparent to readers scanning the archive.

### Implementation and Impact

Document the real-world effects of approved proposals:

```markdown
## Implementation

[Description of how the proposal was implemented]

**Changes Made**: [Specific governance, policy, or operational changes]  
**Timeline**: [Implementation timeline and milestones]  
**Evaluation**: [Assessment of implementation success or challenges]
```

For rejected proposals, this section might discuss alternative approaches taken or lessons learned from the proposal process.

## Template Usage Guidelines

### Customization Principles

Adapt this template to fit SuperBenefit DAO's specific governance processes and documentation style. The template should serve your community's needs rather than imposing external requirements.

Consider local variations such as specific voting thresholds, proposal categories, or governance phases unique to your organization. The template can be modified to accommodate these while maintaining consistency across archives.

### Maintenance Practices

Archive creation should occur promptly after proposal resolution to preserve accurate context while details remain fresh. However, implementation sections may be updated over time as approved proposals are carried out.

Maintain consistent formatting and organization across all archived proposals to support easy navigation and research. Regular review of archive completeness helps ensure that governance decisions are properly documented for future reference.

### Quality Considerations

Archive entries should strive for completeness while remaining readable and useful. Include enough context for someone unfamiliar with the specific proposal to understand its significance and outcomes.

Verify that all links remain functional and that referenced documents are accessible. Archive pages serve as permanent records, so they should remain useful even as other governance platforms evolve or change.

## Standard Archive Template

The following markdown template provides a starting structure for proposal archives:

```markdown
---
description: [Brief proposal description for metadata]
---

# [Proposal Title]

[One-sentence description of proposal purpose]

**Proposed by**: [Author name(s)]  
**Submitted**: [Submission date]  
**Status**: [Current status] ✅/❌/⚠️

[🗣️ Discussion](link-to-discussion)  
[📊 Voting](link-to-voting-platform)

## Proposal Text

[Complete original proposal content]

## Voting Results

**Outcome**: [Decision result]  
**Vote Breakdown**: [Detailed voting statistics]  
**Community Participation**: [Participation metrics]

## Implementation

**Changes Made**: [Specific implementations]  
**Timeline**: [Implementation schedule]  
**Current Status**: [Progress update]  
**Lessons Learned**: [Evaluation and insights]

## Related Documentation

- [Links to related governance decisions]
- [References to policy changes]
- [Implementation documentation]
```

This template serves as a foundation that can be customized for specific proposal types or governance contexts while maintaining consistency across your governance archives.

## Integration with Governance Processes

Proposal archiving should integrate seamlessly with your governance workflow rather than creating additional administrative burden. Consider how archive creation fits within your existing governance cycle and who will be responsible for maintaining historical records.

The archive serves not only as historical documentation but as a governance tool that enables better future decision-making by providing context about past experiences. Design your archiving practices to support this dual purpose of preservation and practical utility.
