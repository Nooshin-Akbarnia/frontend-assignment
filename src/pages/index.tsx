import { useState } from 'react';
import { Button } from 'ui-components-library';
import Head from 'next/head';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setClickCount(prev => prev + 1);
    }, 100);
  };

  return (
    <>
      <Head>
        <title>Button Component Demo</title>
        <meta name="description" content="Demo of UI Components Library Button Component" />
      </Head>

      <div className="min-h-screen p-8">
        <h1 className="mb-8 text-3xl font-bold">Button Component Demo</h1>
        
        <div className="space-y-8">
          {/* Color Variants */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Color Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button color="primary">Primary Button</Button>
              <Button color="success">Success Button</Button>
              <Button color="info">Info Button</Button>
              <Button color="warning">Warning Button</Button>
              <Button color="error">Error Button</Button>
            </div>
          </section>

          {/* Size Variants */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Size Variants</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="small">Small Button</Button>
              <Button size="medium">Medium Button</Button>
              <Button size="large">Large Button</Button>
            </div>
          </section>

          {/* Interactive Buttons */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Interactive Buttons</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                color="primary" 
                onClick={handleClick}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Click Me!'}
              </Button>
              <Button 
                color="success" 
                onClick={handleClick}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Click Me Too!'}
              </Button>
              <div className="text-sm text-gray-600">
                Click count: {clickCount}
              </div>
            </div>
          </section>

          {/* Disabled State */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Disabled State</h2>
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled Button</Button>
              <Button color="success" disabled>Disabled Success</Button>
              <Button color="error" size="large" disabled>Large Disabled Error</Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 