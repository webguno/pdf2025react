import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function TermsConditions() {
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
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using our Image to PDF Converter application ("the Service"), you accept and agree 
              to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Service Description</h2>
            <p className="mb-4">
              Our Image to PDF Converter is a free web application that allows users to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Convert multiple image files into a single PDF document</li>
              <li>Customize PDF settings including page size, orientation, and margins</li>
              <li>Process images entirely within their browser for privacy</li>
              <li>Download the resulting PDF file</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily use the Service for personal and commercial purposes under the 
              following conditions:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>This is the grant of a license, not a transfer of title</li>
              <li>Under this license you may not modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained in the Service</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
            <p className="mb-4">You agree not to use the Service to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Process illegal, harmful, or offensive content</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights of others</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the service in a way that could damage or impair its functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Content Responsibility</h2>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-4">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                ⚠️ Important Notice
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300">
                You are solely responsible for the content of images you process. Ensure you have the right 
                to use and convert any images you upload to our service.
              </p>
            </div>
            
            <p className="mb-4">By using the Service, you represent and warrant that:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>You own or have the necessary rights to all images you process</li>
              <li>Your use does not violate any third-party rights</li>
              <li>Your content does not contain illegal or harmful material</li>
              <li>You will comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Privacy and Data Processing</h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 mb-4">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                🔒 Client-Side Processing
              </h3>
              <p className="text-green-700 dark:text-green-300">
                All image processing occurs locally in your browser. We do not store, access, or transmit 
                your images to our servers.
              </p>
            </div>
            
            <p>
              For detailed information about how we handle data, please review our 
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
            <p className="mb-4">
              We strive to maintain high availability but do not guarantee that the Service will be:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Available at all times without interruption</li>
              <li>Free from errors, viruses, or other harmful components</li>
              <li>Compatible with all devices or browsers</li>
              <li>Permanently available (we may discontinue the service)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
            <p className="mb-4">
              The Service has certain technical limitations:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>File size limits based on browser memory capabilities</li>
              <li>Supported file formats (JPEG, PNG, WebP, etc.)</li>
              <li>Processing speed depends on device performance</li>
              <li>Some features may not work on older browsers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="mb-4">
              The materials on our website are provided on an 'as is' basis. We make no warranties, 
              expressed or implied, and hereby disclaim and negate all other warranties including without 
              limitation, implied warranties or conditions of merchantability, fitness for a particular 
              purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
              Further, we do not warrant or make any representations concerning the accuracy, likely results, 
              or reliability of the use of the materials on its website or otherwise relating to such materials 
              or on any sites linked to this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitations of Liability</h2>
            <p>
              In no event shall our company or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising out 
              of the use or inability to use the materials on our website, even if we or our authorized 
              representative has been notified orally or in writing of the possibility of such damage. 
              Because some jurisdictions do not allow limitations on implied warranties, or limitations of 
              liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Accuracy of Materials</h2>
            <p>
              The materials appearing on our website could include technical, typographical, or photographic 
              errors. We do not warrant that any of the materials on its website are accurate, complete, or 
              current. We may make changes to the materials contained on its website at any time without notice. 
              However, we do not make any commitment to update the materials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
            <p>
              We may revise these terms of service for its website at any time without notice. By using this 
              website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with applicable laws, 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us through the 
              feedback options available on our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}