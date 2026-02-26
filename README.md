# TopDuka Library Template

A modern Next.js e-commerce template designed for seamless integration with the TopDuka payment platform. This template provides a complete foundation for building online stores with shopping cart functionality, product displays, and payment processing.

## Features

- 🛒 **Complete Shopping Cart** - Full cart state management with Zustand
- 🎨 **Modern Dark Theme** - Beautiful dark UI with TailwindCSS v4
- 🚀 **Next.js 16** - Latest Next.js with App Router
- 💳 **TopDuka Integration** - Pre-configured TopDuka client and actions
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **TypeScript** - Full type safety
- 🔄 **React Query** - Efficient data fetching and caching

## Tech Stack

- **Framework**: Next.js 16.1.6
- **Styling**: TailwindCSS v4
- **State Management**: Zustand
- **Data Fetching**: TanStack React Query
- **Payment**: TopDuka (@valebytes/topduka-node)
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- TopDuka API key

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd topduka-library-template
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Add your TopDuka API key to `.env.local`:

```env
NEXT_PUBLIC_API_KEY=your_topduka_api_key_here
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
├── app/                 # Next.js app router pages
├── components/          # React components
│   ├── features/        # Feature-specific components
│   │   └── home/        # Homepage sections
│   └── common/          # Shared components
├── lib/                 # Utilities and configurations
│   ├── actions/         # TopDuka API actions
│   ├── hooks.ts         # Custom React hooks
│   └── duka.ts          # TopDuka client setup
├── store/               # State management
│   └── useCartStore.ts  # Shopping cart state
└── public/              # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding New Products

Products are managed through the TopDuka integration. Update your product catalog via the TopDuka dashboard or API.

### Styling

The template uses TailwindCSS with a dark theme. Customize colors and styles in:

- `tailwind.config.js` - Tailwind configuration
- Component files for specific styling

### TopDuka Configuration

The TopDuka client is configured in `lib/duka.ts`. Modify this file if you need additional TopDuka features or different configuration options.

## Learn More

- [TopDuka Documentation](https://topduka.com) - TopDuka API reference
- [TailwindCSS](https://tailwindcss.com/docs) - Styling framework

## Support

For issues related to:

- **TopDuka Integration**: Check TopDuka documentation
- **Template Issues**: Create an issue in the repository
- **Next.js Questions**: Refer to Next.js docs

## License

MIT License - feel free to use this template for your projects.
