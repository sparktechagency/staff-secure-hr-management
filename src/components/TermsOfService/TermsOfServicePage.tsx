import Container from '@/components/ui/Container';
import React from 'react';

export default function TermsOfService() {
    return (
        <div className="">
            <Container>
                <div className="">
                    {/* Header */}
                    <div className="border-b-4 border-secondary-color px-8 py-10 text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            MASTER SERVICE AGREEMENT (MSA)
                        </h1>
                        <p className="text-xl text-gray-900">
                            Terms & Conditions Governing the Provision of HR Management Services by Staff Secure Ltd
                        </p>
                    </div>

                    {/* Content */}
                    <div className="px-8 py-10 space-y-10">
                        {/* Introduction Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-secondary-color mb-4">Introduction</h2>
                            <div className="text-gray-900 leading-relaxed space-y-4">
                                <p>
                                    This Master Service Agreement forms the comprehensive contractual framework governing the provision of subscription-based HR management services by Staff Secure Ltd, a company duly incorporated in England and Wales and operating from 124–128 City Road, London, EC1V 2NX. This Agreement outlines the rights, obligations, and responsibilities of both parties in relation to the use of Staff Secure Ltd.&apos;s digital HR platform, administrative support solutions, and associated service features.
                                </p>
                                <p>
                                    By subscribing to any of our HR service packages, creating an account, accessing the Employer Dashboard, uploading or receiving worker documentation, using the live chat system, submitting staffing requirements, receiving placement updates, or utilizing any other component of our digital platform available via staffsecure.ai, you (the Customer, the Employer, you) expressly acknowledge and agree to be bound by all provisions contained herein.
                                </p>
                                <p>
                                    This Agreement is governed exclusively by the laws of England and Wales, and incorporates relevant statutory obligations under the Consumer Rights Act 2015, the Electronic Commerce (EC Directive) Regulations 2002, the Data Protection Act 2018, and the UK General Data Protection Regulation (UK GDPR). Any disputes arising out of or relating to this MSA shall be adjudicated solely in the courts of England and Wales.
                                </p>
                                <div className="mt-4">
                                    <p className=" text-gray-900">
                                        Staff Secure Ltd provides administrative HR management and coordination services only. For absolute clarity, we are not an employment agency, do not engage in recruitment, do not supply labor, and do not operate as a job placement or payroll service. We do not employ workers or pay wages, allowances, bonuses, or any employment-related entitlements. All employment obligations—including wage payments, right-to-work compliance, contractual agreements, supervision, and legal responsibilities remain exclusively with the Employer.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Definitions Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-secondary-color mb-4">Definitions and Interpretation</h2>
                            <p className="text-gray-900 mb-4">For the purposes of this Agreement, the following definitions apply:</p>
                            <div className="space-y-3 text-gray-900">
                                <div className="border-l-4 border-secondary-color pl-4 py-2">
                                    <p><span className="font-semibold">Company:</span> means Staff Secure Ltd, its directors, employees, authorised agents, and permitted assigns.</p>
                                </div>
                                <div className="border-l-4 border-secondary-color pl-4 py-2">
                                    <p><span className="font-semibold">Customer: or Employer</span> means the subscribing business entity that purchases and uses the Services.</p>
                                </div>
                                <div className="border-l-4 border-secondary-color pl-4 py-2">
                                    <p><span className="font-semibold">Platform:</span> means the online digital environment accessible via staffsecure.ai, including all integrated modules such as the Employer Dashboard, Candidate Dashboard, Admin Dashboard, messaging systems, onboarding tools, placement tracking features, and all other software functionalities.</p>
                                </div>
                                <div className="border-l-4 border-secondary-color pl-4 py-2">
                                    <p><span className="font-semibold">Services:</span> means the HR management, administrative coordination, communication facilitation, documentation handling, onboarding support, and platform features provided by the Company under the applicable subscription package.</p>
                                </div>
                                <div className="border-l-4 border-secondary-color pl-4 py-2">
                                    <p><span className="font-semibold">Workers:</span> means individuals engaged solely by the Employer. Workers are not employees, contractors, agents, or representatives of Staff Secure Ltd.</p>
                                </div>
                                <div className="border-l-4 border-secondary-color pl-4 py-2">
                                    <p><span className="font-semibold">Subscription: Term</span> refers to the fixed twelve (12) month contract period described in Section 5 of this Agreement.</p>
                                </div>
                                <div className="border-l-4 border-secondary-color pl-4 py-2">
                                    <p><span className="font-semibold">Package: Tier</span> means the specific service level selected by the Employer from the three HR packages presented on the Website and described in Company materials.</p>
                                </div>
                                <div className="border-l-4 border-secondary-color pl-4 py-2">
                                    <p><span className="font-semibold">Requirements:</span> refers to staffing or operational needs posted by the Employer via the Platform.</p>
                                </div>
                                <div className="border-l-4 border-secondary-color pl-4 py-2">
                                    <p><span className="font-semibold">Documentation:</span> includes CVs, worker details, onboarding forms, records, or other materials uploaded or transferred through the Platform.</p>
                                </div>
                            </div>
                        </section>

                        {/* Service Framework Section */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Service Framework and Platform Structure</h2>
                            <p className="text-gray-900 mb-4">
                                The Company provides HR management support delivered through three structured subscription packages. Depending on the Package Tier selected, the Services may include, without limitation: collection and forwarding of worker documentation, verification coordination, secure data processing, communication facilitation through live chat, requirement posting, placement monitoring, and administrative HR support.
                            </p>
                            <p className="text-gray-900 mb-4">The Platform consists of multiple integrated dashboards designed to support Employers and Workers:</p>

                            <div className="grid gap-6">
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <h3 className="text-lg font-bold text-blue-900 mb-3">a. Employer Dashboard</h3>
                                    <p className="text-gray-900 text-sm">
                                        Provides functionalities for posting requirements, reviewing candidate documentation, managing subscription details, overseeing placement progress, accessing internal messages, and communicating with Workers through live chat.
                                    </p>
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <h3 className="text-lg font-bold text-green-900 mb-3">b. Candidate Dashboard</h3>
                                    <p className="text-gray-900 text-sm">
                                        Allows Workers to upload CVs, update their profiles, track placement progress, communicate with Employers, and access onboarding-related instructions.
                                    </p>
                                </div>
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                    <h3 className="text-lg font-bold text-purple-900 mb-3">c. Admin Dashboard</h3>
                                    <p className="text-gray-900 text-sm">
                                        Used exclusively by the Company to manage operational oversight, monitor activity, review job postings, verify submissions, manage Employer accounts, process payments, and ensure compliance with platform rules and security standards.
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-900 mt-4">
                                The Services support Employers in sectors including but not limited to construction, tourism, and nursing. The Employer acknowledges that Staff Secure Ltd provides administrative management only and does not assess worker suitability, validate right-to-work documents, conduct employment vetting, or guarantee performance. All legal responsibility relating to Workers remains solely with the Employer.
                            </p>
                        </section>

                        {/* Subscription Structure Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-secondary-color mb-4">Subscription Structure and Contractual Term</h2>
                            <div className="text-gray-900 leading-relaxed space-y-4">
                                <p>
                                    All Services provided by the Company operate on a fixed twelve (12)-month subscription term (Subscription Term). Upon subscribing to any HR package, the Employer enters into a full one-year contractual commitment and becomes liable for the total service fee associated with the selected Package Tier. The Employer acknowledges that the Services are structured as an annual program and not a month-to-month or pay-as-you-go arrangement.
                                </p>
                                <p>
                                    Access to the Platform—including the Employer Dashboard, Candidate Dashboard, messaging tools, onboarding workflows, document-handling modules, and placement tracking features—remains active for the duration of the Subscription Term, provided all payments are made in accordance with Section 6.
                                </p>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatic Renewal</h3>
                                <p className="text-gray-900 leading-relaxed">
                                    At the expiry of each Subscription Term, the Agreement shall automatically renew for an additional twelve (12)-month period under the same terms unless the Employer provides a valid cancellation notice. To prevent automatic renewal, the Employer must submit a written notice of termination at least <span className="font-semibold">two (2) months prior</span> to the end of the current Subscription Term (Notice Period). Failure to comply with the Notice Period will result in the subscription automatically renewing, and the Employer will be fully liable for the fees associated with the renewed term.
                                </p>
                            </div>

                            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trial Period</h3>
                                <p className="text-gray-900 leading-relaxed">
                                    New Employers may be granted a <span className='font-semibold'>three (3)-day trial period</span> (Trial Period), during which limited access to selected Platform features may be provided. If the Employer does not cancel the Trial Period before the expiry of the three days, the Trial Period shall automatically convert into a full twelve-month Subscription Term, and the Employer shall become liable for the full annual fee.
                                </p>
                            </div>
                        </section>

                        {/* Payments Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-secondary-color mb-4 uppercase">Payments, Refunds & Employer Obligations</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Fees, Billing and Payment Terms</h3>
                                    <p className="text-gray-900 leading-relaxed">
                                        All subscription fees are set out on the Website and/or within the pricing materials supplied by the Company. Payment for the entire Subscription Term is required either upfront or in accordance with the payment schedule displayed on the Platform at the time of purchase. All payments shall be made electronically via the approved card payment system integrated into the Website.
                                    </p>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Policy</h3>
                                    <p className="text-gray-900 leading-relaxed">
                                        Refunds shall only be issued under one circumstance: where <span className='font-semibold'>  Staff Secure Ltd fails to complete the Service requirements associated with the Employer&apos;s selected package. </span> No refunds shall be granted for early cancellation, change of business circumstances, non-use of the Platform, failure to engage Workers, or Employer delays in providing necessary information.
                                    </p>
                                    <p className="text-gray-900 leading-relaxed mt-5">
                                        Refunds shall not apply to auto-renewed terms, Trial Period conversions, or
                                        interruptions resulting from technical issues outside the Company’s control, including
                                        but not limited to internet connectivity or device malfunctions. Any approved refund
                                        will be processed only after internal review and must be requested in writing with
                                        supporting evidence.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Employer Responsibilities</h3>
                                    <p className="text-gray-900 mb-3">The Employer is solely responsible for:</p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-900">
                                        <li>Conducting all employment-related checks, including right-to-work verification</li>
                                        <li>Paying worker wages, bonuses, overtime, tax, and statutory entitlements</li>
                                        <li>Drafting and issuing employment contracts</li>
                                        <li>Ensuring compliance with UK employment legislation</li>
                                        <li>Supervising workers, assessing performance, and managing work schedules</li>
                                        <li>Providing accurate information on staffing requirements</li>
                                        <li>Maintaining secure login credentials and preventing unauthorised access to the Platform</li>
                                    </ul>
                                    <p className="text-gray-900 leading-relaxed mt-5">
                                        The Company does not verify worker suitability, employment legality, qualifications, or
                                        identity documents. All legal, administrative, and financial employment obligations
                                        remain exclusively with the Employer.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Platform Access Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-secondary-color mb-4">Platform Access and Account Security</h2>
                            <div className="text-gray-900 leading-relaxed space-y-4">
                                <p>
                                    Upon successful subscription, the Employer will be granted access to the Platform,
                                    including the Employer Dashboard, Candidate Dashboard, communication modules,
                                    and placement tracking tools. Access is provided exclusively for the Employer’s internal
                                    business use and strictly in accordance with this Agreement. The Employer is
                                    responsible for ensuring that all authorized personnel maintain secure login credentials
                                    and do not share passwords or access rights with unauthorized third parties. Any action
                                    taken under the Employer’s account shall be deemed to have been taken by the
                                    Employer. <br /> <br />
                                    The Company reserves the right to monitor Platform usage for security, operational, and
                                    compliance purposes. Such monitoring may include, without limitation, oversight of
                                    communications, document uploads, job postings, live chat activity, and interactions
                                    within the Dashboard environments. The Employer acknowledges and consents to such
                                    monitoring to maintain system integrity and safeguard all user data.
                                </p>

                                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Acceptable Use Policy</h3>
                                    <p className="mb-3">The Employer agrees not to misuse the Platform or engage in behaviour that may
                                        compromise system security, disrupt service functionality, or infringe upon the rights of
                                        Workers, other Employers, or the Company. Prohibited actions include, but are not
                                        limited to: </p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-900">
                                        <li>Posting false, misleading, defamatory, or unlawful information</li>
                                        <li>Attempting to circumvent security controls or access unauthorised areas</li>
                                        <li>Uploading malicious files or harmful code</li>
                                        <li>Misusing the live chat system for harassment, solicitation, or unprofessional conduct</li>
                                        <li>Using the Platform for activities unrelated to HR management or administrative business operations</li>
                                    </ul>
                                    <p className="text-gray-900 leading-relaxed mt-5">
                                        Any breach of this Acceptable Use Policy may result in immediate suspension or
                                        termination of access without refund, and may lead to legal action where appropriate.
                                        <br /> <br />
                                        <span className='font-semibold text-lg mb-3'>Platform Availability and Maintenance</span><br />
                                        The Company will use commercially reasonable efforts to maintain continuous
                                        availability of the Platform; however, the Employer acknowledges that temporary
                                        downtime may occur due to scheduled maintenance, security updates, technical issues,
                                        or circumstances beyond the Company’s control. The Company shall not be held liable
                                        for any interruption, delay, or loss of access arising from such events.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Data Protection Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-secondary-color mb-4 uppercase">Data Protection, GDPR & Limitation of Liability</h2>
                            <div className="text-gray-900 leading-relaxed space-y-4">
                                <p>
                                    The Company processes personal data strictly in accordance with the UK GDPR, the Data Protection Act 2018, and any relevant regulatory standards. The Employer acknowledges that Worker documentation—including CVs, onboarding records, and submitted materials—is collected solely for administrative HR purposes and is forwarded directly to the Employer via the Platform.
                                </p>
                                <p>
                                    The Company stores all data on a secure, encrypted digital infrastructure and
                                    implements internal controls to ensure the confidentiality, integrity, and availability of
                                    personal information. The Employer agrees to comply fully with its own data protection
                                    obligations, including handling Worker data lawfully and maintaining compliance with
                                    all applicable regulations.
                                </p>
                                <p>
                                    Workers who access the Candidate Dashboard do so voluntarily and provide their
                                    personal data with the understanding that such information will be viewed by the
                                    Employer. The Employer must ensure that all Worker data is used responsibly,
                                    protected from unauthorized disclosure, and retained only for lawful purposes.
                                </p>
                                <p>
                                    The Company may access and review data uploaded through the Platform for legitimate
                                    operational reasons, including troubleshooting, compliance monitoring, or security
                                    checks. Full details of data processing are provided in the Company’s Privacy Policy,
                                    which forms an integral part of this Agreement.
                                </p>

                                <div className="bg-blue-50 border border-blue-300 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                                    <p className="text-gray-900 mb-3">
                                        To the fullest extent permitted by English law, the Company shall not be liable for any
                                        indirect, consequential, incidental, punitive, or special damages, including but not
                                        limited to loss of profits, loss of business opportunities, downtime, or reputational
                                        harm. The Company does not assess Worker suitability, verify identity or right-to-work
                                        status, evaluate qualifications, or guarantee Worker performance. The Employer
                                        assumes all risks and liabilities associated with hiring, engagement, supervision, and
                                        contractual management of Workers.
                                    </p>
                                    <p className="text-gray-900">
                                        The Company’s total cumulative liability arising out of or relating to this Agreement—
                                        whether in contract, tort, negligence, or otherwise—shall not exceed the total
                                        subscription fees paid by the Employer during the current Subscription Term. Nothing
                                        in this Agreement limits liability for fraud, willful misconduct, or any liability that
                                        cannot lawfully be restricted.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Termination Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-secondary-color mb-4 uppercase">Termination, Confidentiality & Intellectual Property</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Termination by the Company</h3>
                                    <p className="text-gray-900 mb-3">Staff Secure Ltd reserves the right to suspend or terminate the Employer’s access to the
                                        Platform, in whole or in part, with immediate effect and without refund, if the
                                        Employer:</p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-900">
                                        <li>Fails to make any required payment</li>
                                        <li>Breaches any provision of this Agreement</li>
                                        <li>Misuses the Platform or engages in prohibited conduct</li>
                                        <li>Provides false, misleading, or fraudulent information</li>
                                        <li>Engages in conduct that may harm the Company&apos;s reputation, systems, or legal standing</li>
                                    </ul>
                                    <p className="text-gray-900 leading-relaxed mt-5">
                                        Termination under this clause does not relieve the Employer from its payment
                                        obligations for the remainder of the Subscription Term.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Termination by the Employer </h3>
                                    <p className="text-gray-900">
                                        The Employer may terminate the Agreement only by providing written notice no less
                                        than two (2) months before the end of the current Subscription Term. Termination
                                        outside the permitted Notice Period shall not prevent automatic renewal, nor release the
                                        Employer from financial responsibility for the subsequent Subscription Term. The
                                        Employer’s failure to use the Platform does not constitute valid termination.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Confidentiality</h3>
                                    <p className="text-gray-900">
                                        Both parties agree to maintain strict confidentiality over all non-public information
                                        exchanged during the term of this Agreement. Such information includes, but is not
                                        limited to, business data, Worker documentation, operational methods, system
                                        architecture, pricing, internal communications, and Platform analytics. Confidential
                                        information shall not be disclosed to any third party except where required by law or
                                        with prior written consent from the disclosing party. This obligation survives
                                        termination of the Agreement.
                                    </p>
                                </div>


                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Intellectual Property Rights</h3>
                                    <p className="text-gray-900">
                                        All intellectual property rights—including copyrights, trademarks, trade names,
                                        software code, system architecture, text, graphics, design elements, dashboard layouts,
                                        and any proprietary technologies—belong exclusively to Staff Secure Ltd. The Employer
                                        receives a limited, non-exclusive, non-transferable licence to use the Platform solely for
                                        internal business purposes. No part of the Platform may be reproduced, distributed,
                                        reverse-engineered, or exploited for commercial gain. Any attempt to replicate or create
                                        derivative works from the Platform is strictly prohibited and may result in legal action.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Governing Law Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-secondary-color mb-4 uppercase">Governing Law, Dispute Resolution & Final Legal Provisions</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Governing Law and Jurisdiction</h3>
                                    <p className="text-gray-900">
                                        This Agreement and all disputes arising from it shall be governed and interpreted
                                        exclusively in accordance with the <span className='font-semibold'>laws of England and Wales.</span>  Both parties
                                        irrevocably agree that the courts of England and Wales shall have sole jurisdiction over
                                        any claim, dispute, or legal proceeding arising from or relating to this Agreement,
                                        regardless of the Employer’s location or place of business.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Dispute Resolution </h3>
                                    <p className="text-gray-900">

                                        before initiating any formal legal proceedings, both parties agree to attempt to resolve
                                        disputes amicably through good-faith negotiations. Where reasonable, the parties may
                                        participate in mediation or alternative dispute resolution (“ADR”). Failure to resolve
                                        disputes informally does not prevent either party from exercising its legal rights.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Force Majeure</h3>
                                    <p className="text-gray-900">
                                        The Company shall not be liable for any delay or failure to perform its obligations caused by circumstances beyond its reasonable control, including but not limited to system failures, cyber-attacks, server outages, natural disasters, strikes, governmental restrictions, or loss of third-party services.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Assignment and Subcontracting </h3>
                                    <p className="text-gray-900">
                                        The Employer may not assign, transfer, or delegate any rights or obligations under this
                                        Agreement without the prior written consent of the Company. Staff Secure Ltd may
                                        subcontract or assign certain administrative tasks to trusted service providers, provided
                                        that such delegation does not diminish the Company’s responsibilities under this
                                        Agreement.
                                    </p>
                                </div>

                                <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Entire Agreement</h3>
                                    <p className="text-gray-900">
                                        This Agreement constitutes the  <span className='font-semibold'>entire understanding</span> between the parties concerning the provision of HR management services and supersedes all prior discussions, proposals, negotiations, or representations, whether written or oral. No amendment to this Agreement shall be valid unless made in writing and signed by both parties.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Severability </h3>
                                    <p className="text-gray-900">
                                        If any provision of this Agreement is deemed invalid or unenforceable, the remaining
                                        provisions shall remain in full force and effect. Any unenforceable clause shall be
                                        interpreted in a manner consistent with the original intent of the parties and applicable
                                        law.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Notices </h3>
                                    <p className="text-gray-900">

                                        All legal notices under this Agreement must be submitted in writing and delivered to
                                        Staff Secure Ltd at the address listed in Section 1, or sent via an approved electronic
                                        method specified on the Platform.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Container>

        </div>
    );
}
