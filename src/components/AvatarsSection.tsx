import React from 'react';
import {
    Video,
    Presentation,
    HeadphonesIcon,
    Briefcase,
    Globe2,
    Wand2,
    Check,
    Activity,
    Smile
} from 'lucide-react';
import styles from './AvatarsSection.module.css';

const AvatarsSection: React.FC = () => {
    return (
        <section className={styles.avatarsSection} id="ai-avatars">
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <div>
                        <div className={styles.subtitle}>OUR SERVICES</div>
                        <h2 className={styles.title}>
                            AI <span className={styles.highlight}>Avatars</span>
                        </h2>
                    </div>
                    
                </div>

                {/* Content Grid */}
                <div className={styles.content}>

                    {/* Left Column: Use Cases */}
                    <div className={styles.capabilitiesCard}>
                        <h3 className={styles.capabilitiesTitle}>Use Cases</h3>
                        <div className={styles.divider} />

                        <div className={styles.list}>
                            <div className={styles.listItem}>
                                <Video className={styles.listIcon} size={20} />
                                <span>Interactive AI video representatives</span>
                            </div>
                            <div className={styles.listItem}>
                                <Presentation className={styles.listIcon} size={20} />
                                <span>Product explainers</span>
                            </div>
                            <div className={styles.listItem}>
                                <HeadphonesIcon className={styles.listIcon} size={20} />
                                <span>Virtual receptionists</span>
                            </div>
                            <div className={styles.listItem}>
                                <Briefcase className={styles.listIcon} size={20} />
                                <span>Sales presenters</span>
                            </div>
                            <div className={styles.listItem}>
                                <Globe2 className={styles.listIcon} size={20} />
                                <span>Multilingual support agents</span>
                            </div>
                        </div>

                        {/* Impact Analysis Card */}
                        <div className={styles.impactCard}>
                            <div className={styles.impactHeader}>
                                <Wand2 className={styles.impactIcon} size={16} />
                                IMPACT ANALYSIS
                            </div>
                            <div className={styles.impactDetails}>
                                <div className={styles.impactText1}>Human-like interaction at infinite scale.</div>
                                <div className={styles.impactText2}>24/7 Face-to-Face Engagement</div>
                            </div>
                            <div className={styles.impactFooter}>
                                <Check size={14} className={styles.impactIcon} />
                                Consistent brand representation
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visualization */}
                    <div className={styles.visualCard}>
                        <div className={styles.visualBadge}>
                            <div className={styles.smallDot} />
                            LIVE AVATAR SYSTEM
                        </div>

                        <div className={styles.visualContent}>
                            {/* Decorative Background */}
                            <div className={styles.bgCircle1} />
                            <div className={styles.bgCircle2} />

                            {/* Central Avatar SVG (Abstract Representation matching reference) */}
                            <div className={styles.avatarCore}>
                                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Helmet/Head */}
                                    <path d="M20 50C20 33.4315 33.4315 20 50 20C66.5685 20 80 33.4315 80 50V60C80 65.5228 75.5228 70 70 70H30C24.4772 70 20 65.5228 20 60V50Z" fill="currentColor" fillOpacity="0.8" />
                                    {/* Face Visor */}
                                    <path d="M30 40C30 35.5817 33.5817 32 38 32H62C66.4183 32 70 35.5817 70 40V52C70 56.4183 66.4183 60 62 60H38C33.5817 60 30 56.4183 30 52V40Z" fill="#1A1A1A" />
                                    {/* Sparkle/Eye in visor */}
                                    <path d="M45 42L48 45L51 42L48 39L45 42ZM40 48L42 50L44 48L42 46L40 48Z" fill="currentColor" />
                                    {/* Ear pieces */}
                                    <rect x="15" y="45" width="5" height="15" rx="2" fill="currentColor" />
                                    <rect x="80" y="45" width="5" height="15" rx="2" fill="currentColor" />
                                    {/* Shoulders / Torso with scan lines */}
                                    <path d="M25 90C25 78.9543 33.9543 70 45 70H55C66.0457 70 75 78.9543 75 90V100H25V90Z" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                                    <rect x="40" y="85" width="20" height="15" rx="4" stroke="currentColor" strokeWidth="1" fill="none" />
                                    <circle cx="45" cy="92" r="2" fill="currentColor" />
                                </svg>
                            </div>

                            {/* Floating Panels */}

                            {/* Panel 1: Speech Log */}
                            <div className={`${styles.floatingPanel} ${styles.speechPanel}`}>
                                <div className={styles.speechText}>
                                    "Welcome to Vyntrix.<br />How may I assist with your automation needs today?"
                                </div>
                            </div>

                            {/* Panel 2: Voice Synthesis */}
                            <div className={`${styles.floatingPanel} ${styles.synthesisPanel}`}>
                                <div className={styles.synthesisHeader}>
                                    <div className={styles.panelHeader}>VOICE SYNTHESIS</div>
                                    <Activity size={12} className={styles.listIcon} />
                                </div>
                                <div className={styles.audioBars}>
                                    <div className={`${styles.bar} ${styles.h1}`} />
                                    <div className={`${styles.bar} ${styles.h4}`} />
                                    <div className={`${styles.bar} ${styles.h2}`} />
                                    <div className={`${styles.bar} ${styles.h5}`} />
                                    <div className={`${styles.bar} ${styles.h3}`} />
                                    <div className={`${styles.bar} ${styles.h4}`} />
                                    <div className={`${styles.bar} ${styles.h1}`} />
                                </div>
                            </div>

                            {/* Panel 3: Sentiment */}
                            <div className={`${styles.floatingPanel} ${styles.sentimentPanel}`}>
                                <div className={styles.panelHeader}>
                                    <Smile size={12} className={styles.listIcon} /> SENTIMENT
                                </div>
                                <div className={styles.sentimentBarContainer}>
                                    <div className={styles.sentimentBar} />
                                </div>
                                <div className={styles.sentimentValue}>Positive 85%</div>
                            </div>

                        </div>

                        <div className={styles.visualFooter}>
                            <div className={styles.statusIndicators}>
                                <div className={styles.statusItem}>
                                    <div className={styles.statusDotGreen} /> RENDER_ENGINE_READY
                                </div>
                                <div className={styles.statusItem}>
                                    <div className={styles.smallDot} /> LIP_SYNC: AUTO
                                </div>
                            </div>
                            <div>AVATAR_MODEL_X2</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AvatarsSection;
