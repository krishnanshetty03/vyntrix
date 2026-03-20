import React from 'react';
import {
    Brain,
    Database,
    Search,
    Workflow,
    Lightbulb,
    Zap,
    Eye,
    GitBranch,
    RotateCw,
    Play
} from 'lucide-react';
import styles from './CognitiveAgentsSection.module.css';

const CognitiveAgentsSection: React.FC = () => {
    return (
        <section className={styles.cognitiveSection} id="cognitive-agents">
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <div>
                        <div className={styles.subtitle}>OUR SERVICES</div>
                        <h2 className={styles.title}>
                            Cognitive AI <span className={styles.highlight}>Agents</span>
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
                                <Brain className={styles.listIcon} size={20} />
                                <span>Decision-making AI</span>
                            </div>
                            <div className={styles.listItem}>
                                <Database className={styles.listIcon} size={20} />
                                <span>Data-driven execution systems</span>
                            </div>
                            <div className={styles.listItem}>
                                <Search className={styles.listIcon} size={20} />
                                <span>AI research assistants</span>
                            </div>
                            <div className={styles.listItem}>
                                <Workflow className={styles.listIcon} size={20} />
                                <span>Multi-step autonomous agents</span>
                            </div>
                        </div>

                        {/* Impact Analysis Card */}
                        <div className={styles.impactCard}>
                            <div className={styles.impactHeader}>
                                <Lightbulb className={styles.impactIcon} size={16} />
                                ADVANCED INTELLIGENCE
                            </div>
                            <div className={styles.impactDetails}>
                                <div className={styles.impactText1}>
                                    Beyond simple automation. We build systems that <span className={styles.highlight}>reason, plan, and adapt.</span>
                                </div>
                            </div>
                            <div className={styles.impactFooter}>
                                <Zap size={14} className={styles.impactIcon} fill="currentColor" />
                                Self-correcting workflows
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visualization (Neural Architecture) */}
                    <div className={styles.visualCard}>

                        <div className={styles.neuralArchitectureTitle}>
                            <div className={styles.neuralDot} />
                            NEURAL ARCHITECTURE
                        </div>

                        <div className={styles.neuralNetwork}>

                            {/* Central Node */}
                            <div className={styles.centerNode}>
                                <Brain className={styles.brainIcon} />
                            </div>

                            {/* Satellite Nodes */}
                            <div className={`${styles.nodeCard} ${styles.nodeTop} `}>
                                <Eye className={styles.nodeIcon} size={18} />
                                <div className={styles.nodeTitle}>Perception</div>
                                <div className={styles.nodeSubtitle}>Input Analysis</div>
                            </div>

                            <div className={`${styles.nodeCard} ${styles.nodeRight} `}>
                                <GitBranch className={styles.nodeIcon} size={18} />
                                <div className={styles.nodeTitle}>Strategy</div>
                                <div className={styles.nodeSubtitle}>Path Selection</div>
                            </div>

                            <div className={`${styles.nodeCard} ${styles.nodeBottomRight} `}>
                                <RotateCw className={styles.nodeIcon} size={18} />
                                <div className={styles.nodeTitle}>Feedback</div>
                                <div className={styles.nodeSubtitle}>Optimization</div>
                            </div>

                            <div className={`${styles.nodeCard} ${styles.nodeBottomLeft} `}>
                                <Play className={styles.nodeIcon} size={18} fill="currentColor" />
                                <div className={styles.nodeTitle}>Action</div>
                                <div className={styles.nodeSubtitle}>Execution</div>
                            </div>

                            <div className={`${styles.nodeCard} ${styles.nodeLeft} `}>
                                <Database className={styles.nodeIcon} size={18} />
                                <div className={styles.nodeTitle}>Context</div>
                                <div className={styles.nodeSubtitle}>Memory Retrieval</div>
                            </div>

                        </div>

                        {/* Footer Status Indicators */}
                        <div className={styles.footerBar}>
                            <div className={styles.statusIndicators}>
                                <div className={styles.statusItem}>
                                    <div className={styles.dotBlue} />
                                    REASONING_ENGINE
                                </div>
                                <div className={styles.statusItem}>
                                    <div className={styles.dotYellow} />
                                    CONFIDENCE: 98.4%
                                </div>
                            </div>
                            <div className={styles.versionText}>
                                COGNITIVE_CORE_V2
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CognitiveAgentsSection;
