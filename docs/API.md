# API Documentation

## Code Block API

### Basic Usage
```markdown
```feed
```

### Configuration Options

#### Query
```markdown
```feed
query: "your dataview query here"
```
```

#### Display Options
```markdown
```feed
query: "your query"
limit: 10
sort: "desc"
groupBy: "field"
```
```

### Available Options

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| query | string | Dataview query to fetch content | required |
| limit | number | Maximum number of items to display | 10 |
| sort | "asc" \| "desc" | Sort order | "desc" |
| groupBy | string | Field to group results by | null |
| refreshInterval | number | Refresh interval in seconds | 60 |

## Plugin API

### Settings Interface
```typescript
interface ObsidianFeedsSettings {
  defaultLimit: number;
  defaultSort: "asc" | "desc";
  defaultRefreshInterval: number;
  showTimestamps: boolean;
  dateFormat: string;
}
```

### Events

| Event | Description |
|-------|-------------|
| feeds:update-settings | Triggered when settings are updated |
| feeds:refresh | Triggered when feeds should refresh |

## Development API

### Code Block Processor
```typescript
class ObsidianFeedsCodeBlockProcessor {
  constructor(
    plugin: ObsidianFeedsPlugin,
    source: string,
    containerEl: HTMLElement,
    context: MarkdownPostProcessorContext
  );
}
```

### Renderer
```typescript
class FeedRenderer {
  constructor(
    containerEl: HTMLElement,
    settings: ObsidianFeedsSettings
  );
  
  async render(): Promise<void>;
  async refresh(): Promise<void>;
}
```

## Error Handling

The plugin provides error handling for:
- Invalid queries
- Missing dependencies
- Rendering errors
- Network issues

## Best Practices

1. Keep queries simple and efficient
2. Use appropriate limits to prevent performance issues
3. Implement proper error handling
4. Follow Obsidian's plugin guidelines
5. Test thoroughly with different data sets 