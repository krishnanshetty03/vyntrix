import React from 'react';
import {
    Clock,
    X,
    ArrowRight,
    Search,
    Globe,
    Cpu,
    FileText,
    Trophy,
    Zap
} from 'lucide-react';
import styles from './CaseStudyCognitiveResearch.module.css';

const CaseStudyCognitiveResearch: React.FC = () => {
    return (
        <section className={styles.caseStudySection} id="case-study-research">
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <div>
                        <div className={styles.subtitle}>CASE STUDY 04</div>
                        <h2 className={styles.title}>
                            AI Cognitive <span className={styles.highlight}>Research Agent</span>
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
                        <h3 className={styles.columnTitle}>Manual Research Overload</h3>

                        <div className={styles.challengeCard}>
                            <div className={styles.challengeMainText}>
                                <Clock className={styles.challengeIcon} size={28} />
                                <div className={styles.challengeText}>
                                    Teams spend countless hours manually compiling data, vetting sources, and drafting initial reports, leaving little time for actual strategic analysis.
                                </div>
                            </div>

                            <div className={styles.challengeList}>
                                <div className={styles.challengeListItem}>
                                    <X className={styles.crossIcon} size={18} />
                                    <span>Slow data gathering</span>
                                </div>
                                <div className={styles.challengeListItem}>
                                    <X className={styles.crossIcon} size={18} />
                                    <span>Inconsistent sourcing</span>
                                </div>
                                <div className={styles.challengeListItem}>
                                    <X className={styles.crossIcon} size={18} />
                                    <span>Delayed decision making</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.metricsRow}>
                            <div className={styles.metricBox}>
                                <div className={styles.metricLabel}>TIME / REPORT</div>
                                <div className={styles.metricValueRed}>15 hrs</div>
                                <div className={styles.metricSub}>Manual Process</div>
                            </div>

                            <ArrowRight className={styles.arrowRight} size={24} />

                            <div className={styles.metricBox}>
                                <div className={styles.metricLabel}>OPPORTUNITY COST</div>
                                <div className={styles.metricValueWhite}>High</div>
                                <div className={styles.metricSub}></div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: The Solution */}
                    <div className={styles.solutionColumn}>
                        <div className={styles.solutionBadge}>THE SOLUTION</div>
                        <h3 className={styles.columnTitle}>Autonomous Intelligence Engine</h3>

                        <div className={styles.stepsContainer}>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>01</div>
                                <Search className={styles.stepIcon} size={20} />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>Query Parsing</div>
                                    <div className={styles.stepDesc}>Understands research goals & context</div>
                                </div>
                            </div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>02</div>
                                <Globe className={styles.stepIcon} size={20} />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>Deep Web Search</div>
                                    <div className={styles.stepDesc}>Crawls & verifies trusted sources</div>
                                </div>
                            </div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>03</div>
                                <Cpu className={styles.stepIcon} size={20} />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>Data Synthesis</div>
                                    <div className={styles.stepDesc}>Cross-references facts & extracts insights</div>
                                </div>
                            </div>

                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>04</div>
                                <FileText className={styles.stepIcon} size={20} fill="currentColor" />
                                <div className={styles.stepContent}>
                                    <div className={styles.stepTitle}>Report Generation</div>
                                    <div className={styles.stepDesc}>Auto-drafts comprehensive reports with citations</div>
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
                                    Accelerated Insights
                                </div>
                            </div>
                            <div className={styles.resultChartIcon}>
                                <Zap size={24} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyCognitiveResearch;
