// dashboard/privacy-policy.js
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
      <div>
        <Head>
          <title>Privacy Policy - DardiBook</title>
        </Head>
        <div className="max-w-4xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 text-gray-800">
          <h1 className="text-3xl font-bold text-center mb-8">
            Privacy Policy
          </h1>

          <div
            className="bg-white p-6 rounded-lg shadow-[0px_0px_0px_1px_#a0aec0]"
            style={{ overflowY: "auto" }}
          >
            <h2 className="text-xl font-semibold mb-4">
              Information We Collect and How We Use It
            </h2>
            <p className="mb-4">
              DardiBook collects information from users to provide and improve
              our services. This may include personal information such as name,
              email address, phone number, and demographic information. We use
              this information to communicate with users, process transactions,
              personalize user experience, and comply with legal obligations.
            </p>

            <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
            <p className="mb-4">
              We may collect and store customer information such as medical
              history, treatment records, and appointment schedules to
              facilitate healthcare services. This information is treated with
              the utmost confidentiality and is only accessed by authorized
              personnel for the purpose of providing healthcare services.
            </p>

            <h2 className="text-xl font-semibold mb-4">Activity</h2>
            <p className="mb-4">
              We may collect information about user activity on our website,
              including pages visited, actions taken, and preferences. This
              helps us analyze user behavior, improve our services, and
              personalize user experience.
            </p>

            <h2 className="text-xl font-semibold mb-4">Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites or services
              that are not operated by DardiBook. We are not responsible for the
              privacy practices or content of these third-party sites. We
              encourage users to review the privacy policies of these sites
              before providing any personal information.
            </p>

            <h2 className="text-xl font-semibold mb-4">Applicable Law</h2>
            <p className="mb-4">
              This Privacy Policy is governed by and construed in accordance
              with the laws of India. Any disputes relating to this Privacy
              Policy or the use of our services shall be resolved in the courts
              of India.
            </p>
          </div>
        </div>
      </div>
  );
}
