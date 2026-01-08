# journey-jotter

## Dynamic LLM Component Configuration and User Balance Tracking

We've implemented a system that allows for dynamic LLM component configuration and accurate user balance tracking across all LLM-using components in the application.

### Overview of Changes

We've updated all LLM-using components to:

1. Dynamically resolve their configuration (prompt name, model name, and provider) from the database
2. Select the appropriate model provider based on this configuration
3. Track token usage and update the user's balance after completion

### Files Modified

**Server Actions:**

- `apps/journey-jotter/src/actions/journal-machine/conversation-to-journal.ts`
- `apps/journey-jotter/src/actions/journal-machine/journal-to-memories.ts`
- `apps/journey-jotter/src/actions/journal-machine/journal-to-tags.ts`
- `apps/journey-jotter/src/actions/journal-machine/journal-to-title.ts`

**API Routes:**

- `apps/journey-jotter/src/app/api/chatbot/journal/create/route.ts`
- `apps/journey-jotter/src/app/api/chatbot/journey/create/route.ts`
- `apps/journey-jotter/src/app/api/chatbot/profile/create/route.ts`

### Implementation Pattern

Each LLM-using component follows a consistent pattern:

1. **Import necessary functions:**

   ```typescript
   import { getComponentLLMInfo } from "@journey-jotter/db/src/db/operations/components";
   import { updateUserBalance } from "@journey-jotter/db/src/db/operations/account";
   ```

2. **Create a provider map:**

   ```typescript
   const providerMap: Record<string, AnthropicProvider | OpenAIProvider> = {
     anthropic: anthropic,
     openai: openai,
   };
   ```

3. **Dynamically resolve LLM configuration:**

   ```typescript
   const componentName = "component-name-prompt-component";
   let promptName: string, modelName: string, providerName: string;

   try {
     const config = await getComponentLLMInfo(componentName);
     promptName = config.promptName;
     modelName = config.modelName;
     providerName = config.providerName;
   } catch (error) {
     // Fallback values if configuration fails
     promptName = "default-prompt-name";
     modelName = "default-model-name";
     providerName = "default-provider";
   }
   ```

4. **Select model dynamically:**

   ```typescript
   let model;
   if (!providerMap[providerName]) {
     model = openai(modelName); // Fallback
   } else {
     model = providerMap[providerName](modelName);
   }
   ```

5. **Track usage and update user balance:**
   ```typescript
   try {
     const usage = await result.usage;
     await updateUserBalance(
       modelName,
       userId,
       usage.promptTokens,
       usage.completionTokens
     );
   } catch (error) {
     console.error("Error processing usage data:", error);
   }
   ```

### Component Naming Convention

All LLM components are named with a specific pattern: `[function]-component`. The full list of component names:

- `journalling-chatbot-prompt-component`
- `generate-journal-entry-component`
- `generate-journal-title-component`
- `generate-journal-tags-component`
- `generate-journal-memories-component`
- `journey-creator-chatbot-prompt-component`
- `profile-creator-chatbot-prompt-component`

### Benefits

This implementation provides several key benefits:

1. **Configuration Flexibility:** LLM models, providers, and prompts can be changed through the database without code changes
2. **Cost Accuracy:** Users are accurately billed for their actual token usage
3. **Consistent Code:** The approach is consistent across all LLM usage in the application
4. **Error Resilience:** Each component has appropriate fallbacks if the configuration lookup fails

## Photo System Improvements

### Overview

The photo system has been enhanced to eliminate loading delays and improve user experience:

1. **Thumbnail Generation**: Photos are automatically resized to 70x70px thumbnails when uploaded
2. **Embedded Storage**: Thumbnails are stored directly in journal entries (no separate lookups needed)
3. **Migration Support**: Existing photos are automatically migrated to the new system
4. **Improved Performance**: No more photo "pop-in" effects on the journals page

### Technical Details

#### Database Changes

- **Version 13**: Added `photoThumbnails` and `photoCount` fields to journal entries
- **Migration**: Automatically generates thumbnails for existing photos during upgrade
- **Backward Compatibility**: Old photo system remains functional during transition

#### Key Components

- `generateThumbnail()`: Creates compressed 70x70px JPEG thumbnails
- `addPhotosToConversation()`: Handles photo upload before journal creation
- `updateJournalEntryWithPhotoThumbnails()`: Links photos to journal entries
- `PhotoPreviewGrid`: Displays thumbnails with improved loading states

#### Usage

```typescript
// Upload photos during conversation
const { photoIds, thumbnails } = await addPhotosToConversation(
  conversationId,
  files
);

// Regenerate thumbnails (development/testing)
await regenerateAllThumbnails();
```

### Migration Notes

- Database automatically upgrades from v12 to v13
- Existing photos are processed during first app load after update
- No user action required - migration happens transparently
- Development debug button available for manual thumbnail regeneration
