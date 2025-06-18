# Development Guide

## Setup

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager
- Git
- Obsidian (for testing)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/lukemt/obsidian-feeds.git
cd obsidian-feeds
```

2. Install dependencies:
```bash
yarn install
```

3. Build the plugin:
```bash
yarn build
```

## Development Workflow

### Local Development
1. Start the development server:
```bash
yarn dev
```

2. Link the plugin to your Obsidian vault:
   - Copy the `main.js` and `styles.css` to your vault's plugins directory
   - Enable the plugin in Obsidian settings

### Testing
1. Run linting:
```bash
yarn lint
```

2. Check formatting:
```bash
yarn check-format
```

3. Format code:
```bash
yarn prettier
```

## Project Structure

### Key Files
- `src/main.ts`: Plugin entry point
- `src/code-block.ts`: Code block processor
- `src/renderer.ts`: Feed rendering logic
- `src/settings.ts`: Settings management
- `src/ui/`: React components

### Build Configuration
- `esbuild.config.mjs`: Build configuration
- `tsconfig.json`: TypeScript configuration
- `.eslintrc.js`: ESLint configuration
- `.prettierrc`: Prettier configuration

## Contributing

### Code Style
- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features

### Pull Request Process
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

### Commit Message Format
```
[<module/feature>][<submodule>] <concise description>

- bullet style change list
```

## Release Process

1. Update version in `package.json`
2. Update `manifest.json`
3. Update `versions.json`
4. Create a new release on GitHub
5. Submit to Obsidian community plugins

## Debugging

### Common Issues
1. Build errors
   - Check TypeScript errors
   - Verify dependencies
   - Check build configuration

2. Runtime errors
   - Check browser console
   - Verify plugin settings
   - Check Dataview integration

### Development Tools
- VS Code with TypeScript support
- Chrome DevTools for debugging
- Obsidian Developer Tools

## Performance Optimization

1. Code Splitting
   - Use dynamic imports
   - Lazy load components
   - Optimize bundle size

2. Rendering
   - Implement virtual scrolling
   - Use efficient data structures
   - Optimize re-renders

3. Data Management
   - Cache query results
   - Implement debouncing
   - Optimize Dataview queries 