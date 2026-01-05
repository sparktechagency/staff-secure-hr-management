/* eslint-disable react/no-unescaped-entities */
import Container from '@/components/ui/Container';
import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen">
      <Container>
        <div className="my-20">
          {/* Header */}
          <div className="border-b-4 border-secondary-color px-8 py-10 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              PRIVACY POLICY
            </h1>
            <p className="text-xl text-gray-900">
              Staff Secure Ltd Privacy Policy (UK GDPR Compliant)
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Last Updated: 14 November 2025
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-10 space-y-10">
            {/* Introduction Section */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">Introduction & Scope</h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  This Privacy Policy explains how Staff Secure Ltd ("we", "us", "our") collects, uses, shares, and protects personal information when users access or interact with our HR management platform at staffsecure.ai. We are fully committed to complying with the UK General Data Protection Regulation ("UK GDPR"), the Data Protection Act 2018, and all applicable UK data-protection laws. By creating an account, uploading a CV, submitting job requirements, communicating through the platform, or subscribing to our HR service packages, you acknowledge and agree to the practices described in this Privacy Policy.
                </p>
              </div>
            </section>

            {/* About Us Section */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">About Us</h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  Staff Secure Ltd is the Data Controller responsible for determining the purposes and methods of processing your personal data. Our registered business address is <span className="font-semibold">124–128 City Road, London, EC1V 2NX, United Kingdom.</span> Staff Secure Ltd operates a digital HR management system that enables employers to post staffing requirements, receive candidate CVs, access placement updates, communicate through chat tools, and manage subscription services, all through a secure online platform. Candidates may create profiles, upload CVs, review job opportunities, communicate with employers, and track their placement progress.
                </p>
              </div>
            </section>

            {/* Who This Policy Applies To */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">Who This Policy Applies To</h2>
              <p className="text-gray-900 mb-4">This Privacy Policy applies to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-900">
                <li>Employers who subscribe to our 12-month HR management packages.</li>
                <li>Candidates who register on the platform and apply for job opportunities.</li>
                <li>Website visitors who browse, interact, or submit information through staffsecure.ai.</li>
                <li>Any individual contacting us for support, enquiries, or general communication.</li>
              </ul>
            </section>

            {/* What Personal Data We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">What Personal Data We Collect</h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  We collect a range of personal and professional data depending on how you use the platform. This includes information provided directly by users as well as data collected automatically through system logs and cookies. We only collect information necessary to provide our services, maintain platform security, process payments, fulfil contractual obligations, or comply with legal requirements. Data categories include identity information, contact details, subscription records, job-related data, uploaded documents, communication logs, and technical usage data.
                </p>
              </div>
            </section>

            {/* Employer Data */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Employer Data We Collect</h3>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  When employers create an account or subscribe to one of our HR packages, we collect personal and business information required to manage their subscription and deliver platform services. This includes the employer&apos;s full name, company name, business sector, email address, telephone number, profile settings, and user login credentials. We also collect subscription and billing information such as chosen package, instalment plan, payment history, renewal dates, trial period activation, and invoice records. Payment card details are not stored by Staff Secure Ltd; instead, they are processed securely through trusted third-party payment providers such as Stripe or PayPal.
                </p>
                <p>
                  Employers also generate usage data during their interaction with the platform. This includes job requirements submitted, CVs viewed, messages exchanged through the live-chat system, placement progress, and dashboard activity logs. We also track notifications, subscription alerts, account modifications, and system interactions. This data allows us to operate your account, deliver HR services, manage your subscription, verify platform activity, and comply with our contractual and legal obligations.
                </p>
              </div>
            </section>

            {/* Candidate Data */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Candidate Data We Collect</h3>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  Candidates who create profiles or apply for jobs provide personal, professional, and employment-related data necessary for HR matching and placement support. This includes full name, email address, location, date of birth, skills, qualifications, years of experience, roles of interest, and any additional information added to their professional profile. Candidates may also upload CVs or documents containing sensitive employment information such as work history, education, certifications, references, and contact details. CVs may also include photographs and other identifiers submitted voluntarily.
                </p>
                <p>
                  We collect candidate activity data including job applications, application status updates, CV dispatch details, employer views, chat messages with employers, placement outcomes, and internal system notifications. All candidate data is processed to facilitate introductions between employers and candidates, support job-matching decisions, and manage placement workflows on the platform.
                </p>
              </div>
            </section>

            {/* Technical Data */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical and Automatically Collected Data</h3>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  When users access or interact with our platform, certain technical information is collected automatically to maintain security, enhance user experience, and support system analytics. This includes IP address, browser type, device type, operating system, access times, authentication tokens, session identifiers, and error diagnostics. We also track page navigation, feature interaction, login attempts, and usage patterns to help us optimise the platform&apos;s performance and detect fraudulent or unauthorised activity. This information is gathered through cookies, secure session technology, and automated logging tools operating within our system.
                </p>
                <p>
                  We use cookies to ensure the platform functions correctly, to enable secure login sessions, and to understand how users navigate the website. Cookies also support preference settings, saved filters, dashboard configurations, and analytics required to improve performance. Certain non-essential cookies or tracking tools may require user consent under UK law; these will be presented via a cookie banner when applicable. Users may adjust cookie settings at any time through their browser or via a cookie preferences panel if made available.
                </p>
              </div>
            </section>

            {/* How We Use Personal Data */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">How We Use Personal Data</h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  Staff Secure Ltd processes personal data for several clearly defined purposes. The primary purpose is to deliver HR management services, including creating user accounts, managing subscriptions, presenting job opportunities, forwarding CVs to employers, and facilitating communication between employers and candidates. We use identity, contact, and account information to verify users, maintain secure access, and provide tailored platform features. We process billing information to manage subscriptions, generate invoices, and handle renewals in accordance with the customer&apos;s chosen service package.
                </p>
                <p>
                  Candidate data is processed to support job matching, placement decisions, and communication with employers. CVs and professional information are shared only with employers who require candidates for open roles. Technical and analytics data is used to maintain platform functionality, enhance security protections, diagnose technical issues, and support operational improvement. We may also process data to comply with legal obligations, resolve disputes, prevent fraud, and enforce our Terms & Conditions.
                </p>
              </div>
            </section>

            {/* Legal Bases */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">Legal Bases for Processing Personal Data</h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  Under the UK GDPR, Staff Secure Ltd must rely on one or more lawful bases to process personal data. We primarily process data under <span className="font-semibold">Contract Performance</span>, as employers and candidates require our services to submit job requirements, apply for roles, review CVs, and manage subscriptions. Where data is processed to improve platform functionality, maintain security, or support analytics, we rely on <span className="font-semibold">Legitimate Interests</span>, ensuring such processing is necessary, proportionate, and does not override user rights. For certain activities—such as storing optional profile data, using non-essential cookies, or sharing candidate CVs with employers—we rely on <span className="font-semibold">Consent</span>, which can be withdrawn at any time.
                </p>
                <p>
                  We may process personal data under <span className="font-semibold">Legal Obligation</span> where required to comply with UK tax, accounting, fraud prevention, and regulatory requirements. If exceptionally sensitive employment information is submitted within CVs or profiles, such data is processed strictly for HR matching and with the clear understanding that it has been voluntarily provided by the candidate.
                </p>
              </div>
            </section>

            {/* How CV Data Is Shared */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">How Candidate CV Data Is Shared</h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  A core function of our platform is to enable the secure forwarding of candidate CVs and professional profiles to employers who request staffing support. When a candidate uploads a CV or applies for a job, they provide explicit consent for Staff Secure Ltd to share this information with relevant employers for recruitment and placement purposes. Employers who receive CVs must use them solely for evaluating suitability for their staffing needs and must comply with UK data-protection law. We track CV dispatch activity, employer views, and updates to ensure transparency and maintain an auditable record of how candidate data is used.
                </p>
                <p>
                  We do not permit employers to share candidate CVs outside their own organisation or store CVs longer than necessary for recruitment purposes. Candidates may request the removal of their CV from our system at any time, although this will not affect any processing already performed lawfully prior to the request. CV forwarding is central to our HR service model, and by choosing to upload a CV, candidates acknowledge and agree to this controlled method of data sharing.
                </p>
              </div>
            </section>

            {/* Sharing with Third Parties */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">Sharing Personal Data with Third Parties</h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  We may share personal data with trusted third-party service providers who support the operation of our platform and the delivery of our HR management services. These providers assist with secure data hosting, cloud storage, email delivery, analytics, payment processing, customer support, and technical infrastructure. All such third parties are contractually bound to protect personal data, act only on our instructions, and maintain strict confidentiality in accordance with the UK GDPR. Examples include cloud hosting partners, email service platforms, analytics tools, and payment processors such as Stripe or PayPal. We ensure that third-party access is limited, controlled, and used only when necessary to fulfil core service functions.
                </p>
                <p>
                  We may also share limited information with regulatory authorities, law enforcement, or professional advisers when legally required. This may include responding to court orders, complying with tax and accounting obligations, or addressing suspected fraudulent or unlawful activities on the platform. Staff Secure Ltd does not sell personal data to any third parties, nor do we permit unauthorised reuse or commercial exploitation of user information for marketing purposes without explicit consent. Employers receiving candidate CVs are prohibited from forwarding data externally unless required for legitimate internal hiring decisions within their organisation.
                </p>
              </div>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">International Transfers of Data</h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  Some of our service providers may store or process data outside the United Kingdom. In such cases, Staff Secure Ltd ensures that adequate safeguards are implemented to comply with UK GDPR standards. These safeguards may include the use of countries deemed to offer adequate protection under UK law, the implementation of International Data Transfer Agreements, or the adoption of Standard Contractual Clauses approved by the Information Commissioner&apos;s Office (ICO). We require all overseas partners to apply strong security measures and ensure the lawful handling of data transferred internationally. Users may contact us at any time for more information about the specific safeguards applied to international transfers.
                </p>
                <p>
                  Staff Secure Ltd remains fully responsible for all data transferred to or processed by third parties and ensures that such transfers occur only when necessary and compliant with applicable legal requirements. We continuously monitor our suppliers to verify ongoing compliance with these standards.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">Data Security Measures</h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  Staff Secure Ltd implements strong technical and organisational measures to safeguard personal data against unauthorised access, misuse, loss, alteration, and disclosure. Our platform utilises secure, encrypted cloud hosting environments with restricted access controls to ensure that only authorised personnel can access system data. Passwords are stored using industry-standard encryption methods, and sensitive operations—such as profile changes, CV uploads, and job submissions—are protected by secure session technology. We also employ firewalls, multi-layered server security, and automated monitoring tools to detect suspicious activity, prevent fraud, and maintain the integrity of our platform.
                </p>
                <p>
                  We conduct regular system audits, data backups, and vulnerability assessments to ensure service reliability and compliance with UK data-protection requirements. Internal staff and contractors with access to personal data receive ongoing training in data protection and privacy best practices. Although we take all reasonable steps to safeguard user information, no online system can guarantee absolute security. Users are responsible for maintaining the confidentiality of their login credentials and for reporting any suspected unauthorized access to us immediately.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">Data Retention Policy</h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  We retain personal data only for as long as necessary to fulfil the purposes for which it was collected or to comply with legal, regulatory, and operational requirements. Employer account data and subscription information are retained for the duration of the subscription and may be kept for up to <span className="font-semibold">seven years</span> thereafter to meet UK tax and accounting obligations. Candidate profiles, CVs, and job application records are stored for as long as the candidate maintains an active account. If a candidate becomes inactive, we may retain their data for a period of <span className="font-semibold">12 to 36 months</span> before securely deleting or anonymizing it, unless a longer retention period is required for legitimate business or legal purposes.
                </p>
                <p>
                  Chat messages, placement records, and notification logs are typically retained for <span className="font-semibold">12 to 24 months</span> to support dispute resolution and operational transparency. Users may request deletion of their data at any time, subject to our legal obligations to retain certain records. Once retention periods expire, personal data is either securely erased or anonymized so it can no longer be linked to an identifiable individual.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">Your Rights Under the UK GDPR</h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  As a data subject, you have several important rights under the UK General Data Protection Regulation ("UK GDPR"). These rights give you control over how your personal data is used and enable you to request certain actions from Staff Secure Ltd regarding your information. You have the <span className="font-semibold">right to access</span> the personal data we hold about you and to request a copy of that information. You have the <span className="font-semibold">right to rectification</span>, which allows you to request corrections to inaccurate, outdated, or incomplete data held on your account or within our system.
                </p>
                <p>
                  You also have the <span className="font-semibold">right to erasure</span> ("right to be forgotten"), which permits you to request deletion of your personal data when it is no longer required for the purposes for which it was collected or where you withdraw consent. This right does not apply to data we must retain for legal or contractual reasons. You may request <span className="font-semibold">restriction of processing</span> in situations where you contest the accuracy of your data, where processing is unlawful, or where you require us to retain information for legal claims. The <span className="font-semibold">right to data portability</span> allows you to receive certain personal data in a structured, commonly used format and transfer it to another service provider.
                </p>
                <p>
                  Users also have the <span className="font-semibold">right to object</span> to processing based on legitimate interests, including profiling related to HR or analytical processes. If we rely on consent to process your personal data, you may <span className="font-semibold">withdraw your consent</span> at any time without affecting the lawfulness of prior processing. Requests to exercise these rights can be submitted to us using the contact details provided in this Privacy Policy. We will respond within one month, unless your request is complex, in which case we may require additional time.
                </p>
              </div>
            </section>

            {/* Exercising Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">Exercising Your Rights & Identity Verification</h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  To exercise your data-protection rights, you may contact Staff Secure Ltd using the contact information provided below. When submitting a request, we may need to verify your identity to ensure that personal data is not disclosed to anyone who does not have the legal right to access it. Verification may involve confirming information already held in your account or requesting additional identification where necessary. We will never request unnecessary details, and any identification information submitted for verification purposes will be handled securely and only for the purpose of processing your request.
                </p>
                <p>
                  We aim to respond to all valid requests within <span className="font-semibold">one month</span>. If a request is particularly complex or involves a large volume of data, we may extend the response period by an additional two months, as allowed under the UK GDPR. In such cases, you will be notified of the delay and the reason for it. There is generally no fee for exercising your rights; however, we may charge a reasonable administrative fee if a request is clearly unfounded, repetitive, or excessive, or we may decline to act on such requests under these circumstances.
                </p>
              </div>
            </section>

            {/* Complaints */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">Complaints and ICO Contact Information</h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  If you have concerns about how Staff Secure Ltd processes your personal data, we encourage you to contact us first so we can address the matter promptly. You have the right to lodge a complaint with the UK&apos;s supervisory authority for data protection, the <span className="font-semibold">Information Commissioner&apos;s Office (ICO)</span>, if you believe your rights have been violated or if you are dissatisfied with our response. Complaints can be submitted through the ICO website at <span className="text-blue-600">www.ico.org.uk</span>, by telephone, or by written correspondence. The ICO has the authority to review complaints, investigate data-protection breaches, and issue guidance or enforcement actions when required.
                </p>
                <p>
                  Contacting the ICO does not affect your ability to seek remedies through the courts or any other appropriate legal channels. Staff Secure Ltd is committed to maintaining a transparent and cooperative relationship with regulatory authorities and ensuring compliance with all applicable data-protection standards.
                </p>
              </div>
            </section>

            {/* Contact Details */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">Contact Details</h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  If you have questions about this Privacy Policy, require assistance with your personal data, or wish to exercise any of your rights under the UK GDPR, you may contact Staff Secure Ltd using the information below. We aim to respond to all enquiries as quickly as possible and provide clear guidance regarding your rights, our data-handling practices, and any aspects of this Policy that require clarification.
                </p>
                <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Controller:</h3>
                  <p className="text-gray-900">
                    <span className="font-semibold">Staff Secure Ltd</span><br />
                    124–128 City Road<br />
                    London<br />
                    EC1V 2NX<br />
                    United Kingdom
                  </p>
                  <p className="text-gray-900 mt-3">
                    <span className="font-semibold">Email:</span> frankedwards@staffsecure.ai
                  </p>
                </div>
                <p className="text-gray-700 text-sm mt-4">
                  Users should note that email communication may not always be fully secure, and information of a sensitive nature should only be shared when appropriate and with caution. If we introduce a secure in-platform support channel or additional contact methods, these will be published on our website or user dashboard.
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-color mb-4">Changes to This Privacy Policy</h2>
              <div className="text-gray-900 leading-relaxed space-y-4">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our business operations, legal obligations, or platform functionality. Any updates will be published on this page with an updated "Last Updated" date. Material changes—such as modifications to the categories of data we collect, updates to legal bases for processing, or changes in how candidate CVs are shared—will be communicated to users through email notifications or platform alerts, where appropriate. We encourage users to review this Privacy Policy regularly to stay informed about how their personal data is handled.
                </p>
                <p>
                  Continued use of our platform after changes have been published represents acceptance of the updated Policy. If you do not agree with any part of the revised Privacy Policy, you must discontinue using the platform and may request deletion of your account and associated personal data.
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
