import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-back-home"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              This Privacy Policy describes how our Image to PDF Converter application handles your information. 
              We are committed to protecting your privacy and ensuring the security of your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Processing</h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 mb-4">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                🔒 Your Images Stay Private
              </h3>
              <p className="text-green-700 dark:text-green-300">
                All image processing happens entirely in your browser. Your images are never uploaded to our servers 
                or transmitted over the internet. This ensures complete privacy and security of your files.
              </p>
            </div>
            
            <h3 className="text-lg font-medium mb-2">Client-Side Processing</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Images are processed locally using your browser's JavaScript engine</li>
              <li>PDF conversion happens entirely on your device</li>
              <li>No image data is sent to external servers</li>
              <li>Files are automatically cleared from memory when you leave the page</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            
            <h3 className="text-lg font-medium mb-2">Technical Information</h3>
            <p className="mb-4">
              We may collect basic technical information to improve our service:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Screen resolution</li>
              <li>General usage analytics (page views, feature usage)</li>
            </ul>

            <h3 className="text-lg font-medium mb-2">No Personal Data Collection</h3>
            <p>We do not collect:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Personal identification information</li>
              <li>Email addresses</li>
              <li>File contents or names</li>
              <li>Location data</li>
              <li>Device identifiers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookies and Local Storage</h2>
            <p className="mb-4">
              We use minimal local storage for:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Saving your theme preference (light/dark mode)</li>
              <li>Remembering conversion settings</li>
              <li>Basic analytics cookies (if applicable)</li>
            </ul>
            <p>
              You can clear this data at any time through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="mb-4">
              Our application may use third-party services for:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Website hosting and content delivery</li>
              <li>Anonymous usage analytics</li>
              <li>Error monitoring and performance tracking</li>
            </ul>
            <p>
              These services do not have access to your image files or personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>HTTPS encryption for all communications</li>
              <li>Client-side processing to prevent data exposure</li>
              <li>Regular security updates and monitoring</li>
              <li>No long-term storage of user files</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-4">
              Since we don't collect personal data, most data protection rights don't apply. However, you can:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Clear your browser data at any time</li>
              <li>Disable cookies through browser settings</li>
              <li>Use the service without providing any personal information</li>
              <li>Contact us with questions about this policy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy occasionally. Any changes will be posted on this page 
              with an updated revision date. Continued use of the service constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us through 
              the feedback options available on our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}