# User Guide

## Getting Started

### Prerequisites
1. Install [Obsidian](https://obsidian.md)
2. Install the [Dataview](https://obsidian.md/plugins?id=dataview) plugin
3. Install the Obsidian Feeds plugin

### Installation
1. Open Obsidian Settings
2. Go to Community Plugins
3. Search for "Feeds"
4. Click Install
5. Enable the plugin

## Basic Usage

### Creating a Feed
1. Create a new note or open an existing one
2. Add a code block with the `feed` language identifier:

```feed
searchFor: "#topic"
```

### Configuration Options

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| searchFor | string | Tags, links, or text to match. Supports `[[link]]` and `#tag` syntax. | "[[#]]" (current note) |
| sort | "asc" \| "desc" | Sort order (ascending/descending) | "desc" |
| limit | number | Max items to show | 10 |
| groupBy | string | Grouping key. Common: `file.folder`, `file.name` | – |
| showTree | boolean | Show full bullet hierarchy | false |
| showParentIfNotAlone | boolean | Keep parent bullets when children match | true |
| removeOwnLinkFromList | boolean | Remove redundant self-links | false |
| pageLength | number | Items per page when pagination is enabled | 10 |
| showCopyFeedButton | boolean | Adds a UI button to copy the feed | true |
| showOptionsPanel | boolean | Shows an options panel above the feed | false |
| collapseHeaders | boolean | Flatten section headers into the bullet text | false |

`searchFor` builds the Dataview filter automatically for you. Under the hood, the plugin converts the tags/links you specify into a Dataview `list` query.

### Example Queries

#### Basic List
```feed
searchFor: "#notes"
```

#### With Sorting
```feed
searchFor: "#notes"
sort: "desc"
limit: 5
```

#### Grouped Results
```feed
searchFor: "#notes"
groupBy: "file.folder"
```

#### Productivity Tag Feed
```feed
searchFor: "#productivity"
sort: "desc"
limit: 10
groupBy: "file.folder"
showTree: true
showParentIfNotAlone: true
removeOwnLinkFromList: true
showCopyFeedButton: true
showOptionsPanel: true
collapseHeaders: false
pageLength: 10
```

This feed configuration:
- Shows items tagged with #productivity
- Displays newest items first
- Groups items by folder
- Shows hierarchical structure
- Includes parent items when they have children
- Removes redundant links
- Provides copy and options functionality
- Shows 10 items per page

## Advanced Features

### Custom Styling
You can customize the appearance of feeds using CSS. Add your custom styles to your Obsidian theme or create a new CSS snippet.

### Auto-refresh
Feeds automatically refresh based on the configured interval. You can adjust this in the plugin settings.

### Error Handling
- Invalid queries will display an error message
- Missing dependencies will prompt for installation
- Network issues will show a retry option

## Tips and Tricks

1. Use meaningful tags for better organization
2. Keep queries simple and focused
3. Use appropriate limits to maintain performance
4. Group related content for better organization
5. Use the preview mode to test feed configurations
6. Tag your notes with #productivity when making significant updates
7. Use showTree for hierarchical content
8. Enable showParentIfNotAlone to maintain context
9. Use groupBy to organize content by location or type
10. Adjust pageLength based on your content density

## Troubleshooting

### Common Issues

1. **Feed not displaying**
   - Check if Dataview plugin is enabled
   - Verify query syntax
   - Check for any error messages

2. **Slow performance**
   - Reduce the number of items in the feed
   - Simplify complex queries
   - Increase refresh interval

3. **Missing content**
   - Verify file paths and tags
   - Check query syntax
   - Ensure files are properly linked

### Getting Help

- Check the [GitHub repository](https://github.com/lukemt/obsidian-feeds)
- Join the [Discord community](https://discord.gg/obsidianmd)
- Open an issue for bugs or feature requests
