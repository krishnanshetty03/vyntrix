import React from 'react';
import {
    AlertTriangle,
    X,
    ArrowRight,
    Magnet,
    Filter,
    CalendarCheck,
    BellRing,
    Trophy,
    TrendingUp
} from 'lucide-react';
import styles from './CaseStudyAppointmentSetter.module.css';

const CaseStudyAppointmentSetter: React.FC = () => {
    return (
        <section className={styles.caseStudySection} id="case-study-appointment">
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <div>
                        <div className={styles.subtitle}>CASE STUDY 01</div>
                        <h2 className={styles.title}>
                            AI Appointment <span className={styles.highlight}>Setter</span>
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
                        <h3 className={styles.columnTitle}>Manual Follow-up Chaos</h3>

                        <div className={styles.challengeCard}>
                            <div className={styles.challengeMainText}>
                                <AlertTriangle className={styles.challengeIcon} size={28} />
                                <div className={styles.challengeText}>
                                    Leads drop off before booking because manual follow-ups are inconsistent, slow, and prone to human error.
                                </div>
                            </div>

                            <div className={styles.challengeList}>
                                <div className={styles.challengeListItem}>
                                    <X className={styles.crossIcon} size={18} />
                                    <span>High drop-off rate</span>
                                </div>
                                <div className={styles.challengeListItem}>
                                    <X className={styles.crossIcon} size={18} />
                                    <span>Missed opportunities</span>
                                </div>
                                <div className={styles.challengeListItem}>
                                    <X className={styles.crossIcon} size={18} />
                                    <span>Wasted ad spend</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.metricsRow}>
                            <div className={styles.metricBox}>
                                <div className={styles.metricLabel}>BEFORE AI</div>
                                <div className={styles.metricValueRed}>12%</div>
                                <div className={styles.metricSub}>Conversion</div>
                            </div>

                            <ArrowRight className={styles.arrowRight} size={24} />

                            <div className={styles.metricBox}>
                                <div className={styles.metricLabel}>LOST REVENUE</div>
                                <div className={styles.metricValueWhite}>High</div>
                                <div className={styles.metricSub}></div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: The Solution */}
                    <div className={styles.solutionColumn}>
                        <div className={styles.solutionBadge}>THE SOLUTION</div>
                        <h3 className={styles.columnTitle}>Intelligent Workflow Architecture</h3>

                        <div className={styles.stepsContainer}>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>01</div>
                                <Magnet className={styles.stepIcon} size={20} />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>Lead Capture</div>
                                    <div className={styles.stepDesc}>Instant capture from forms/ads</div>
                                </div>
                            </div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>02</div>
                                <Filter className={styles.stepIcon} size={20} fill="currentColor" />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>AI Qualification</div>
                                    <div className={styles.stepDesc}>Scoring & Intent analysis</div>
                                </div>
                            </div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>03</div>
                                <CalendarCheck className={styles.stepIcon} size={20} />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>Calendar Booking</div>
                                    <div className={styles.stepDesc}>Auto-scheduling with conflicts check</div>
                                </div>
                            </div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>04</div>
                                <BellRing className={styles.stepIcon} size={20} fill="currentColor" />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>Reminder Sequence</div>
                                    <div className={styles.stepDesc}>SMS/Email nudges to reduce no-shows</div>
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
                                    Faster Lead Conversion
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

export default CaseStudyAppointmentSetter;
