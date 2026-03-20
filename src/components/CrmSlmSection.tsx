import React from 'react';
import {
    SlidersHorizontal,
    Target,
    LineChart,
    Rocket,
    CheckCircle2,
    Home,
    Users,
    Settings,
    PieChart,
    Bell
} from 'lucide-react';
import styles from './CrmSlmSection.module.css';

const CrmSlmSection: React.FC = () => {
    return (
        <section className={styles.crmSection} id="crm-slm">
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <div>
                        <div className={styles.subtitle}>OUR SERVICES</div>
                        <h2 className={styles.title}>
                            CRM & SLM <span className={styles.highlight}>Systems</span>
                        </h2>
                    </div>

                </div>

                {/* Content Grid */}
                <div className={styles.content}>

                    {/* Left Column: Capabilities */}
                    <div className={styles.capabilitiesCard}>
                        <h3 className={styles.capabilitiesTitle}>System Capabilities</h3>
                        <div className={styles.divider} />

                        <div className={styles.list}>
                            <div className={styles.listItem}>
                                <SlidersHorizontal className={styles.listIcon} size={20} />
                                <span>Custom CRM setup</span>
                            </div>
                            <div className={styles.listItem}>
                                <Target className={styles.listIcon} size={20} />
                                <span>Smart lead management</span>
                            </div>
                            <div className={styles.listItem}>
                                <LineChart className={styles.listIcon} size={20} />
                                <span>Sales lifecycle monitoring</span>
                            </div>
                            <div className={styles.listItem}>
                                <Rocket className={styles.listIcon} size={20} />
                                <span>AI-driven pipeline optimization</span>
                            </div>
                        </div>

                        {/* Impact Analysis Card */}
                        <div className={styles.impactCard}>
                            <div className={styles.impactHeader}>
                                <Target className={styles.impactIcon} size={16} />
                                IMPACT
                            </div>
                            <div className={styles.impactDetails}>
                                <div className={styles.impactText1}>Eliminate lead leakage completely.</div>
                                <div className={styles.impactText2}>360° Pipeline Visibility</div>
                            </div>
                            <div className={styles.impactFooter}>
                                <CheckCircle2 size={14} className={styles.impactIcon} />
                                Automated status updates
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visualization (Dashboard Mockup) */}
                    <div className={styles.visualCard}>

                        <div className={styles.dashboardMockup}>
                            <div className={styles.dashboardInner}>
                                {/* Sidebar */}
                                <div className={styles.sidebar}>
                                    <div className={styles.sidebarLogo}>V</div>
                                    <Home className={`${styles.sidebarIcon} ${styles.active}`} size={20} />
                                    <Users className={styles.sidebarIcon} size={20} />
                                    <PieChart className={styles.sidebarIcon} size={20} />
                                    <Settings className={styles.sidebarIcon} size={20} />
                                </div>

                                {/* Main Content Area */}
                                <div className={styles.dashboardContent}>
                                    <div className={styles.dashboardHeader}>Sales Overview</div>

                                    <div className={styles.metricsGrid}>
                                        <div className={styles.metricCard}>
                                            <div className={styles.metricLabel}>TOTAL LEADS</div>
                                            <div className={styles.metricValue}>1,248</div>
                                            <div className={`${styles.metricTrend} ${styles.trendUp}`}>↑ +12%</div>
                                        </div>
                                        <div className={styles.metricCard}>
                                            <div className={styles.metricLabel}>CONVERSION</div>
                                            <div className={styles.metricValue}>24.8%</div>
                                            <div className={`${styles.metricTrend} ${styles.trendUp}`}>↑ +5%</div>
                                        </div>
                                        <div className={styles.metricCard}>
                                            <div className={styles.metricLabel}>PIPELINE VALUE</div>
                                            <div className={styles.metricValue}>$45.2k</div>
                                            <div className={`${styles.metricTrend} ${styles.trendNeutral}`}>Updated 2m ago</div>
                                        </div>
                                    </div>

                                    <div className={styles.chartArea}>
                                        <div className={styles.chartHeader}>
                                            <div className={styles.chartTitle}>Lead Acquisition Trend</div>
                                            <div className={styles.chartLegend}>
                                                <div className={styles.legendItem}>
                                                    <div className={`${styles.legendDot} ${styles.dotOrganic}`} /> Organic
                                                </div>
                                                <div className={styles.legendItem}>
                                                    <div className={`${styles.legendDot} ${styles.dotPaid}`} /> Paid
                                                </div>
                                            </div>
                                        </div>
                                        <svg className={styles.chartSvg} viewBox="-2 0 104 40" preserveAspectRatio="none">
                                            <path
                                                d="M 0,35 C 20,30 30,10 50,15 C 70,20 80,5 100,5"
                                                fill="none"
                                                stroke="var(--gold)"
                                                strokeWidth="1.5"
                                                vectorEffect="non-scaling-stroke"
                                            />
                                            <path
                                                d="M 0,38 C 30,35 50,25 70,28 C 90,30 95,15 100,15"
                                                fill="none"
                                                stroke="rgba(255, 255, 255, 0.2)"
                                                strokeWidth="1.5"
                                                vectorEffect="non-scaling-stroke"
                                                strokeDasharray="4 4"
                                            />
                                        </svg>
                                        <div className={styles.xAxis}>
                                            <span>JAN</span>
                                            <span>FEB</span>
                                            <span>MAR</span>
                                            <span>APR</span>
                                            <span>MAY</span>
                                            <span>JUN</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Notification */}
                            <div className={styles.floatingNotification}>
                                <Bell className={styles.notificationIcon} size={18} />
                                <div className={styles.notificationContent}>
                                    <div className={styles.notificationTitle}>New Opportunity</div>
                                    <div className={styles.notificationText}>TechCorp Deal Closed</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CrmSlmSection;
