// ============================================
// PORTFOLIO CONFIGURATION
// Edit this file to update all portfolio content
// No React knowledge needed!
// ============================================

export const personalInfo = {
  name: "Nour El Houda Chaabi",
  title: "Cloud & DevOps Engineer",
  location: "Tunisia",
  education: "4th Year Engineering Student, ESPRIT — Architecture IT & Cloud Computing",
  github: "https://github.com/chaabinour",
  linkedin: "https://www.linkedin.com/in/nour-el-houda-chaabi-10064913a",
  email: "chaabinourelhouda08@gmail.com",
  emailAlt: "Chaabi.NourElHouda@esprit.tn",
  availability: "Summer 2026 internship, minimum 2 months",
  heroStatement: "Building infrastructure that anticipates, adapts, performs.",
  aboutHeadline: "From Ghardimaou to Global Infrastructure",
  aboutNarrative: "I engineer systems that don't just run — they learn. With a foundation in cloud architecture and a passion for intelligent automation, I bridge the gap between traditional infrastructure and AI-powered operations.",
};

export const terminalCommands: Record<string, string> = {
  help: `Available commands:
  whoami    - About me
  skills    - Technical skills
  projects  - View projects
  contact   - Get in touch
  clear     - Clear terminal`,
  whoami: `Nour El Houda Chaabi
  4th Year Cloud Engineering Student @ ESPRIT
  Specialization: Architecture IT & Cloud Computing
  Location: Tunisia 🇹🇳
  Focus: AI-Powered Infrastructure`,
  skills: `Cloud:        AWS (EKS, EC2, S3) | Azure (AKS, VMs) | OpenStack
  Automation:   Terraform | Ansible | Docker | Kubernetes
  CI/CD:        GitLab CI | Jenkins
  Monitoring:   Prometheus | Grafana
  Scripting:    Python | Bash`,
  projects: `[1] AI-Powered OpenStack Infrastructure
  [2] Intelligent Kubernetes Resource Guardian
  [3] B2B Application Deployment Pipeline [IN PROGRESS]
  
  Type 'project 1', 'project 2', or 'project 3' for details.`,
  contact: `LinkedIn:  linkedin.com/in/nour-el-houda-chaabi-10064913a
  GitHub:    github.com/chaabinour
  Email:     chaabinourelhouda08@gmail.com
  Alt Email: Chaabi.NourElHouda@esprit.tn
  Location:  Tunisia, Remote Global
  
  "Exploring internship opportunities for Summer 2026"`,
  clear: "__CLEAR__",
};

export const heroTypingCommands = [
  "kubectl get pods --all-namespaces",
  "terraform plan",
  "ansible-playbook site.yml",
  "docker compose up -d",
];

export const nowPlaying = {
  currentlyBuilding: "B2B App Deployment Pipeline",
  lastCommit: "Recently",
  currentFocus: "Optimizing CI/CD workflows",
  learning: "Advanced Terraform patterns",
  reading: "Kubernetes Patterns by Bilgin Ibryam",
};

export const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", details: "EKS, EC2, S3, CloudWatch", icon: "aws" },
      { name: "Azure", details: "AKS, VMs, Monitor", icon: "azure" },
      { name: "OpenStack", details: "Private Cloud", icon: "openstack" },
    ],
  },
  {
    title: "Automation & IaC",
    skills: [
      { name: "Terraform", details: "Infrastructure as Code", icon: "terraform" },
      { name: "Ansible", details: "Configuration Management", icon: "ansible" },
      { name: "Docker", details: "Containerization", icon: "docker" },
      { name: "Kubernetes", details: "Container Orchestration", icon: "kubernetes" },
    ],
  },
  {
    title: "CI/CD & Monitoring",
    skills: [
      { name: "GitLab CI", details: "Pipeline Development", icon: "gitlab" },
      { name: "Jenkins", details: "Build Automation", icon: "jenkins" },
      { name: "Prometheus", details: "Metrics & Alerting", icon: "prometheus" },
      { name: "Grafana", details: "Visualization", icon: "grafana" },
    ],
  },
  {
    title: "Scripting",
    skills: [
      { name: "Python", details: "Automation & AI/ML", icon: "python" },
      { name: "Bash", details: "Shell Scripting", icon: "bash" },
    ],
  },
];

export const codeSnippets: Record<string, { language: string; code: string }> = {
  Terraform: {
    language: "hcl",
    code: `resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"
  
  tags = {
    Name = "nour-cloud-lab"
  }
}`,
  },
  Kubernetes: {
    language: "yaml",
    code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: resource-guardian
spec:
  replicas: 3
  selector:
    matchLabels:
      app: guardian`,
  },
  Docker: {
    language: "dockerfile",
    code: `FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "main.py"]`,
  },
  Ansible: {
    language: "yaml",
    code: `- name: Configure web servers
  hosts: webservers
  become: yes
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present`,
  },
  Python: {
    language: "python",
    code: `import boto3

ec2 = boto3.client('ec2')
response = ec2.describe_instances(
    Filters=[{'Name': 'tag:Env',
              'Values': ['production']}]
)`,
  },
  "GitLab CI": {
    language: "yaml",
    code: `stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - docker build -t app .`,
  },
  Prometheus: {
    language: "yaml",
    code: `global:
  scrape_interval: 15s
scrape_configs:
  - job_name: 'kubernetes'
    kubernetes_sd_configs:
      - role: pod`,
  },
  Grafana: {
    language: "json",
    code: `{
  "dashboard": {
    "title": "K8s Metrics",
    "panels": [{
      "type": "graph",
      "datasource": "Prometheus"
    }]
  }
}`,
  },
};

export const projects = [
  {
    id: 1,
    title: "AI-Powered OpenStack Infrastructure",
    challenge: "Predict infrastructure failures before they happen",
    solution: "AI layer for proactive failure detection",
    stack: ["openstack", "python", "tensorflow"],
    result: "Self-healing private cloud infrastructure",
    status: "completed" as const,
    adr: {
      title: "Why OpenStack?",
      decisions: [
        {
          question: "Why OpenStack over Proxmox?",
          answer: "OpenStack provides a true cloud experience with API-driven infrastructure, multi-tenancy, and a production-grade architecture. Proxmox is great for lab setups, but OpenStack better demonstrates enterprise cloud patterns.",
        },
        {
          question: "Why this AI approach?",
          answer: "Time-series analysis on resource metrics allows proactive detection of degradation patterns before they cascade into outages. This approach is vendor-agnostic and applicable across cloud providers.",
        },
        {
          question: "Trade-offs vs commercial solutions",
          answer: "Commercial APM tools offer more polish, but building from scratch demonstrates deep understanding of monitoring fundamentals and ML pipeline architecture.",
        },
      ],
    },
    efficiency: [
      "Automated recovery reduces manual monitoring overhead",
      "Proactive detection prevents cascading failures",
      "Self-healing reduces mean time to recovery",
    ],
  },
  {
    id: 2,
    title: "Intelligent Kubernetes Resource Guardian",
    challenge: "Prevent resource exhaustion before performance impact",
    solution: "Automated infrastructure with predictive CPU/storage alerts",
    stack: ["kubernetes", "ansible", "docker", "python", "prometheus", "grafana"],
    result: "Automated scaling with AI-powered warnings",
    status: "completed" as const,
    adr: {
      title: "Architecture Decisions",
      decisions: [
        {
          question: "Why Ansible over Puppet?",
          answer: "Ansible's agentless architecture simplifies deployment in containerized environments. Push-based configuration aligns with GitOps workflows, and YAML playbooks lower the learning curve for team collaboration.",
        },
        {
          question: "Why custom monitoring vs Datadog?",
          answer: "Building custom monitoring deepens understanding of metrics pipelines, PromQL, and alert engineering. It also demonstrates the ability to architect solutions from first principles.",
        },
      ],
    },
    efficiency: [
      "Proactive scaling prevents resource contention",
      "Resource-aware scheduling optimizes cluster utilization",
      "Automated alerting reduces incident response time",
    ],
  },
  {
    id: 3,
    title: "B2B Application Deployment Pipeline",
    challenge: "Developing B2B app for deployment on custom infrastructure",
    solution: "End-to-end CI/CD with GitLab, containerized deployments",
    stack: ["gitlab", "docker", "kubernetes", "terraform"],
    result: "Full deployment automation pipeline",
    status: "in-progress" as const,
    adr: {
      title: "Architecture Decisions",
      decisions: [
        {
          question: "Why GitLab CI over GitHub Actions?",
          answer: "GitLab CI provides a unified platform for source control, CI/CD, container registry, and security scanning. For B2B deployments, having everything in one ecosystem simplifies access control and audit trails.",
        },
      ],
    },
    efficiency: [
      "Automated scaling reduces manual intervention",
      "Right-sizing approach cuts unnecessary overhead",
      "Spot instance strategy for cost-aware deployments",
    ],
  },
];

export const experience = [
  {
    org: "JCI Ghardimaou",
    role: "Active Member",
    description: "Leadership through community impact. Project management, teamwork, event organization.",
    type: "leadership" as const,
  },
  {
    org: "IEEE ESPRIT",
    role: "Former Member",
    description: "Collaborative technical problem-solving. Engineering teamwork, technical communication.",
    type: "technical" as const,
  },
];

export const certifications = [
  { name: "KodeKloud Certifications", status: "completed" as const, source: "LinkedIn" },
  { name: "AWS Cloud Practitioner", status: "in-progress" as const, progress: 65 },
];

export const bootSequence = [
  { text: "[OK] Initializing portfolio kernel...", delay: 400 },
  { text: "[OK] Loading skills modules...", delay: 300 },
  { text: "[OK] Mounting project volumes...", delay: 350 },
  { text: "[OK] Configuring network interfaces...", delay: 250 },
  { text: "[OK] Starting Nour El Houda Chaabi v4.0...", delay: 500 },
];

export const activityDashboard = [
  { name: "OpenStack Management", status: "active" as const, detail: "Infrastructure monitoring" },
  { name: "Kubernetes Orchestration", status: "active" as const, detail: "Pod scaling operations" },
  { name: "Ansible Automation", status: "idle" as const, detail: "Playbook development" },
  { name: "GitLab CI/CD", status: "active" as const, detail: "Pipeline execution" },
];
