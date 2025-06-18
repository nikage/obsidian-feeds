# Technical Architecture

## Overview
Obsidian Feeds is built as a plugin for Obsidian, utilizing TypeScript and the Obsidian API. The plugin integrates with Dataview to provide dynamic content aggregation and display capabilities.

## Core Components

### Plugin Entry Point (`main.ts`)
- Initializes the plugin
- Manages settings
- Registers code block processors
- Handles plugin lifecycle

### Code Block Processor (`code-block.ts`)
- Processes markdown code blocks with the `feed` language identifier
- Parses feed configuration
- Manages feed rendering lifecycle

### Renderer (`renderer.ts`)
- Handles the actual rendering of feeds
- Processes Dataview queries
- Manages feed updates and refresh cycles
- Handles error states and loading states

### Settings Management (`settings.ts`)
- Manages plugin configuration
- Provides settings UI
- Handles settings persistence

### UI Components (`ui/`)
- Contains React components for the plugin's user interface
- Manages feed display and interaction
- Handles user input and feedback

## Data Flow

1. User creates a feed code block in a note
2. Code block processor detects and parses the feed configuration
3. Renderer queries Dataview for relevant content
4. UI components display the feed content
5. Feed updates automatically based on configuration

## Dependencies

### Core Dependencies
- obsidian: Core Obsidian API
- obsidian-dataview: For content querying and aggregation

### Development Dependencies
- typescript: For type safety and development
- esbuild: For building the plugin
- eslint: For code quality
- prettier: For code formatting

## Build Process

1. TypeScript compilation
2. ESBuild bundling
3. Asset processing
4. Plugin packaging

## Extension Points

The plugin can be extended through:
- Custom feed renderers
- Additional settings
- New code block processors
- UI component customization

## Performance Considerations

- Efficient Dataview querying
- Debounced updates
- Caching of feed results
- Lazy loading of UI components 