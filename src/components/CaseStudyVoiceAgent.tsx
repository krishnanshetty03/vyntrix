import React from 'react';
import {
    UserX,
    X,
    ArrowRight,
    Phone,
    MessageCircle,
    Filter,
    RefreshCw,
    Trophy,
    TrendingUp
} from 'lucide-react';
import styles from './CaseStudyVoiceAgent.module.css';

const CaseStudyVoiceAgent: React.FC = () => {
    return (
        <section className={styles.caseStudySection} id="case-study-voice">
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <div>
                        <div className={styles.subtitle}>CASE STUDY 02</div>
                        <h2 className={styles.title}>
                            AI Voice <span className={styles.highlight}>Sales Agent</span>
                        </h2>
                    </div>
                   
                </div>

                {/* Content Structure */}
                <div className={styles.content}>
                    {/* Vertical Divider */}
                    <div className={styles.dividerVertical}>
                        <div className={styles.dividerHighlight} />
                    </div>

                    {/* LEFT COLUMN: The Challenge */}
                    <div>
                        <div className={styles.challengeBadge}>THE CHALLENGE</div>
                        <h3 className={styles.columnTitle}>Scaling Cold Outreach</h3>

                        <div className={styles.challengeCard}>
                            <div className={styles.challengeMainText}>
                                <UserX className={styles.challengeIcon} size={28} />
                                <div className={styles.challengeText}>
                                    Cold calling at scale requires massive teams, high overhead, and suffers from inconsistent human performance.
                                </div>
                            </div>

                            <div className={styles.challengeList}>
                                <div className={styles.challengeListItem}>
                                    <X className={styles.crossIcon} size={18} />
                                    <span>High manpower costs</span>
                                </div>
                                <div className={styles.challengeListItem}>
                                    <X className={styles.crossIcon} size={18} />
                                    <span>Inconsistent pitch quality</span>
                                </div>
                                <div className={styles.challengeListItem}>
                                    <X className={styles.crossIcon} size={18} />
                                    <span>Limited calling hours</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.metricsRow}>
                            <div className={styles.metricBox}>
                                <div className={styles.metricLabel}>TEAM SIZE</div>
                                <div className={styles.metricValueRed}>20+</div>
                                <div className={styles.metricSub}>Agents Required</div>
                            </div>

                            <ArrowRight className={styles.arrowRight} size={24} />

                            <div className={styles.metricBox}>
                                <div className={styles.metricLabel}>MONTHLY COST</div>
                                <div className={styles.metricValueWhite}>High</div>
                                <div className={styles.metricSub}>Overhead</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: The Solution */}
                    <div className={styles.solutionColumn}>
                        <div className={styles.solutionBadge}>THE SOLUTION</div>
                        <h3 className={styles.columnTitle}>Autonomous Voice Outreach</h3>

                        <div className={styles.stepsContainer}>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>01</div>
                                <Phone className={styles.stepIcon} size={20} />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>Smart Dialing</div>
                                    <div className={styles.stepDesc}>Predictive dialing & detection</div>
                                </div>
                            </div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>02</div>
                                <MessageCircle className={styles.stepIcon} size={20} />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>AI Conversation</div>
                                    <div className={styles.stepDesc}>Human-like voice with objection handling</div>
                                </div>
                            </div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>03</div>
                                <Filter className={styles.stepIcon} size={20} />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>Live Qualification</div>
                                    <div className={styles.stepDesc}>Filtering interested leads in real-time</div>
                                </div>
                            </div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>04</div>
                                <RefreshCw className={styles.stepIcon} size={20} />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>CRM Sync & Handoff</div>
                                    <div className={styles.stepDesc}>Auto-logging and transfer to closers</div>
                                </div>
                            </div>

                        </div>

                        <div className={styles.resultCard}>
                            <div className={styles.resultContent}>
                                <div className={styles.resultHeader}>
                                    <Trophy size={16} />
                                    KEY RESULT
                                </div>
                                <div className={styles.resultTitle}>
                                    Reduced Manpower Cost
                                </div>
                            </div>
                            <div className={styles.resultChartIcon}>
                                <TrendingUp size={24} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyVoiceAgent;
