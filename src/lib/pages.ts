export const EMAIL = 'kumijewisdom7@gmail.com';
const NAME = 'Kumije Wisdom H.';
const UPDATED = 'November 2026';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

type P = { title: string; description: string; html: string };

export const PAGES: Record<string, P> = {
  about: {
    title: 'About The Curious Pitch',
    description: 'The Curious Pitch is an independent football publication asking questions beyond the score.',
    html: `
<p>The Curious Pitch is an independent football publication. We look at the game beyond the score: the money, the power, the controversies, the mysteries and the stories that get forgotten.</p>
<p>Our motto is simple: question everything, discover more.</p>
<h2>What we cover</h2>
<ul>
<li><strong>Controversies and debates:</strong> VAR, refereeing, awards and the arguments fans never settle.</li>
<li><strong>The business of football:</strong> transfers, wages, agents and club finances.</li>
<li><strong>Football mysteries:</strong> strange events and curious facts.</li>
<li><strong>Untold stories:</strong> forgotten players and hidden histories.</li>
<li><strong>Tactics and stats:</strong> breakdowns and numbers that explain the game.</li>
</ul>
<h2>Our series</h2>
<p>The Big Question, Follow the Money, What Really Happened?, The Unpopular Opinion and Forgotten Football.</p>
<h2>Who we are</h2>
<p>The Curious Pitch is written and edited by ${NAME}.</p>
<h2>How we work</h2>
<p>We aim to back claims with evidence, name our sources and correct mistakes openly. Read our <a href="/editorial-policy">editorial policy</a> for details.</p>
<p>Questions or story ideas? <a href="/contact">Get in touch</a>.</p>`,
  },

  contact: {
    title: 'Contact',
    description: 'Contact The Curious Pitch for story tips, corrections, partnerships and press enquiries.',
    html: `
<p>We read every message. Email us at ${mail}.</p>
<h2>Story tips and ideas</h2>
<p>Got a football question we should investigate? Send it over, with any links or sources you have.</p>
<h2>Corrections</h2>
<p>If we got something wrong, tell us the story title and what needs fixing. See how we handle corrections in our <a href="/editorial-policy">editorial policy</a>.</p>
<h2>Advertising and partnerships</h2>
<p>For sponsorship or partnership enquiries, email us with “Partnership” in the subject line.</p>
<h2>Press</h2>
<p>Journalists and researchers can reach us at the same address.</p>`,
  },

  privacy: {
    title: 'Privacy policy',
    description: 'How The Curious Pitch collects, uses and protects your information, including cookies and advertising.',
    html: `
<p>Last updated: ${UPDATED}.</p>
<p>This policy explains what information we collect when you visit this website, how we use it, and the choices you have.</p>
<h2>Information we collect</h2>
<ul>
<li><strong>Usage data.</strong> Like most websites, our hosting provider and analytics tools may collect your IP address, browser type, device, the pages you view and the site that referred you.</li>
<li><strong>Email address.</strong> If you subscribe to our newsletter, we collect the email address you give us.</li>
<li><strong>Messages.</strong> If you email us, we keep your message and address so we can reply.</li>
</ul>
<h2>How we use it</h2>
<p>We use information to run and secure the site, understand which stories readers value, send the newsletter you asked for, reply to your messages, and show advertising that helps fund our work.</p>
<h2>Cookies</h2>
<p>Cookies are small files stored on your device. We and our partners may use cookies and similar technologies for analytics, advertising and remembering preferences. You can control or delete cookies in your browser settings.</p>
<h2>Advertising</h2>
<p>We may display ads served by Google AdSense. Third-party vendors, including Google, use cookies to serve ads based on a user’s prior visits to this website or other websites. Google’s use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and other sites on the internet.</p>
<p>You can opt out of personalised advertising in <a href="https://adssettings.google.com">Google Ads Settings</a>. You can also opt out of some third-party vendors’ use of cookies for personalised advertising at <a href="https://www.aboutads.info">aboutads.info</a>.</p>
<h2>Analytics</h2>
<p>We may use Google Analytics to understand how visitors use the site. It uses cookies to collect information such as pages visited and time on site.</p>
<h2>Third-party services</h2>
<ul>
<li>Cloudflare, for hosting, delivery and security.</li>
<li>Sanity, for managing our content.</li>
<li>Google Fonts, for typefaces. Your browser requests font files from Google, which receives your IP address.</li>
<li>Google Analytics and Google AdSense, as described above.</li>
<li>An email service provider, to deliver our newsletter.</li>
</ul>
<h2>Visitors in the EEA, UK and Switzerland</h2>
<p>Where the law requires it, we ask for your consent before using cookies for analytics or personalised advertising, and you can change your choice at any time.</p>
<h2>Sharing your information</h2>
<p>We do not sell your personal information. We share it only with the service providers above, where the law requires it, or with your consent.</p>
<h2>How long we keep it</h2>
<p>We keep newsletter emails until you unsubscribe, messages for as long as needed to deal with them, and analytics data according to our provider’s settings.</p>
<h2>Your rights</h2>
<p>Depending on where you live, data protection laws such as the GDPR, the UK GDPR or the Nigeria Data Protection Act may give you rights to access, correct or delete your information, to object to certain uses, and to withdraw consent. To use these rights, email ${mail}.</p>
<h2>Children</h2>
<p>This site is not directed at children under 13, and we do not knowingly collect their information.</p>
<h2>Links to other sites</h2>
<p>Our stories link to other websites. We are not responsible for their privacy practices.</p>
<h2>Changes to this policy</h2>
<p>We may update this policy from time to time. The date at the top shows when it last changed.</p>
<h2>Contact</h2>
<p>Questions about this policy? Email ${mail}.</p>`,
  },

  'editorial-policy': {
    title: 'Editorial policy',
    description: 'The standards The Curious Pitch holds itself to: accuracy, sourcing, independence and corrections.',
    html: `
<p>The Curious Pitch exists to ask better questions about football. This policy explains the standards we hold ourselves to.</p>
<h2>Accuracy and sourcing</h2>
<p>We check facts, figures and quotes before we publish. When we use a statistic, we name the source and link to it where we can. We separate what we know, what we have been told and what we think.</p>
<h2>Reporting and opinion</h2>
<p>Our analysis aims to be evidence-based. Stories in The Unpopular Opinion series, and The Curious Pitch Verdict at the end of each story, are our own judgement, and we label them that way.</p>
<h2>Independence</h2>
<p>Advertisers, sponsors and affiliate partners do not influence what we cover or what we conclude. Any sponsored content or affiliate link will be clearly labelled.</p>
<h2>Corrections</h2>
<p>If we get something wrong, we fix it quickly. We note significant corrections at the top of the story. To report an error, email ${mail}.</p>
<h2>Images and rights</h2>
<p>We use images we own, have licensed, or have permission to use, and we credit them where required. If you believe we have used something improperly, tell us and we will review it promptly.</p>
<h2>Our use of tools</h2>
<p>We may use AI tools to help research, draft or edit. A person reviews, fact-checks and approves every story before it is published and is responsible for it.</p>
<h2>Contact</h2>
<p>Questions about our standards? Email ${mail}.</p>`,
  },
};
