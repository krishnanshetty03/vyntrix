import React from 'react';
import {
    PhoneCall,
    Calendar,
    Headset,
    Bell,
    Zap,
    Activity,
    User,
    Bot,
    Mic
} from 'lucide-react';
import styles from './VoiceAgentsSection.module.css';

const VoiceAgentsSection: React.FC = () => {
    return (
        <section className={styles.voiceSection} id="voice-agents">
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <div>
                        <div className={styles.subtitle}>OUR SERVICES</div>
                        <h2 className={styles.title}>
                            AI Voice <span className={styles.highlight}>Agents</span>
                        </h2>
                    </div>
                    
                </div>

                {/* Content Grid */}
                <div className={styles.content}>

                    {/* Left Column: Capabilities */}
                    <div className={styles.capabilitiesCard}>
                        <h3 className={styles.capabilitiesTitle}>Capabilities</h3>
                        <div className={styles.divider} />

                        <div className={styles.list}>
                            <div className={styles.listItem}>
                                <PhoneCall className={styles.listIcon} size={20} />
                                <span>Automated inbound & outbound calling</span>
                            </div>
                            <div className={styles.listItem}>
                                <Calendar className={styles.listIcon} size={20} />
                                <span>Appointment booking & Scheduling</span>
                            </div>
                            <div className={styles.listItem}>
                                <Headset className={styles.listIcon} size={20} />
                                <span>24/7 Customer support inquiries</span>
                            </div>
                            <div className={styles.listItem}>
                                <Bell className={styles.listIcon} size={20} />
                                <span>Intelligent follow-ups & reminders</span>
                            </div>
                        </div>

                        {/* Performance Card */}
                        <div className={styles.performanceCard}>
                            <div className={styles.perfHeader}>
                                <Zap className={styles.perfIcon} size={16} />
                                PERFORMANCE
                            </div>
                            <div className={styles.perfDetails}>
                                <div className={styles.perfText1}>Zero wait times. Instant scalability.</div>
                                <div className={styles.perfText2}>Handle 1,000+ simultaneous calls</div>
                            </div>
                            <div className={styles.perfFooter}>
                                <Activity size={14} className={styles.perfIcon} />
                                Human-like latency (~500ms)
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visualization */}
                    <div className={styles.visualCard}>
                        <div className={styles.visualBadge}>
                            <div className={styles.smallDot} />
                            LIVE AUDIO PROCESSING
                        </div>

                        <div className={styles.visualContent}>
                            <svg className={styles.bgLine} viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path
                                    d="M 20,30 C 50,30 50,70 80,70"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.05)"
                                    strokeWidth="1"
                                    strokeDasharray="2 2"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </svg>

                            {/* User Node */}
                            <div className={`${styles.chatNode} ${styles.userNode}`}>
                                <div className={styles.chatHeader}>
                                    <User size={14} /> USER
                                </div>
                                <div className={styles.chatText}>
                                    "I'd like to reschedule my appointment."
                                </div>
                            </div>

                            {/* Central Mic Visualizer */}
                            <div className={styles.micVisualizer}>
                                <div className={styles.audioBars}>
                                    <div className={`${styles.bar} ${styles.h1}`} />
                                    <div className={`${styles.bar} ${styles.h2}`} />
                                    <div className={`${styles.bar} ${styles.h3}`} />
                                </div>
                                <Mic className={styles.micIcon} size={28} />
                                <div className={styles.audioBars}>
                                    <div className={`${styles.bar} ${styles.h3}`} />
                                    <div className={`${styles.bar} ${styles.h2}`} />
                                    <div className={`${styles.bar} ${styles.h1}`} />
                                </div>
                            </div>

                            {/* Agent Node */}
                            <div className={`${styles.chatNode} ${styles.agentNode}`}>
                                <div className={`${styles.chatHeader} ${styles.agentHeader}`}>
                                    AI AGENT <Bot size={14} />
                                </div>
                                <div className={`${styles.chatText} ${styles.agentText}`}>
                                    "I can help with that. Does Tuesday at 2 PM work for you?"
                                </div>
                            </div>

                        </div>

                        <div className={styles.visualFooter}>
                            <div className={styles.statusIndicators}>
                                <div className={styles.statusItem}>
                                    <Database size={14} /> NLP_ENGINE: ENG_V4
                                </div>
                                <div className={styles.statusItem}>
                                    <Heart size={14} /> SENTIMENT: POSITIVE
                                </div>
                            </div>
                            <div>AUDIO_STREAM_ACTIVE</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// Temp imports for icons used in footer
const Database = ({ size }: { size: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
);
const Heart = ({ size }: { size: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
);


export default VoiceAgentsSection;
