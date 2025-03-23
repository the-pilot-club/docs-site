---
sidebar_position: 1
title: Technology Team SOP
slug: tech-team
---
# Technology Team SOP

## A Word from the founder
Thank you for stepping up and fulfilling a leadership position in the Club. As a Staff member, Club members will look to you for leadership and guidance. You should strive to provide that, in order to make our members’ experience here a great one!

Everything you do here should focus on providing a quality experience for TPC members. I ask you to lead by example, in words and actions. Your contributions to the Club in this manner are greatly appreciated and valued. You have a direct impact on retaining members and growing the Club.

Let’s make this Club a great place for flightsim enthusiasts to be a part of!

## 1. Scope Of Responsibility

### 1.1 Chief Technology Officer / Vice President Technology
1. The CTO/VPT is responsible for all team members and all projects.

2. Responsible to coordinate with The Pilot Club Board of Directors for team and organizational goals.

3. Responsible for upkeep and maintenance of the TPC Web Servers and associated components.

4. Oversees the development and maintenance of various projects within The Pilot Club Inc.

### 1.2 Director of Technology
1. Assists the CTO/VPT in their duties and can fill in as such in the case of absence or vacation.

2. Acts a delegate to the CTP/VPT and has the same responsibilities as such.

### 1.3 Technology Team
1. Aid the Director Of Technology or CTO/VPT by developing code and projects to an acceptable level for The Pilot Club Production environment.

2. Developers are expected to put aside at least 2 hours per week to work on TPC related web services.

3. Developers within The Pilot Club Inc. will be assigned one of the following titles based on their experience and status within the organization:

   1. Senior developer or appropriate equivalent 
   2. Developer or appropriate equivalent.

4. Each developer will be assigned to a team from the following list. Developers may request to put on a team, but the Director Of Technology or CTO/VPT may assign them to another team based on experience.

    1. Developer Team
       1. Discord Bot Project
       2. API Project
       3. Flight Crew Portal Project
    2. Information Technology Team
       1. Database Management
       2. Quality Assurance
       3. Devops 
       4. Infrastructure
       5. Customer Service


   ![Tech Team Org Chart](/img/tpc-tech-team.png)

**To join the Tech Team, members should look in [Section 4](#4-new-team-members) of this document.** 

## 2. Development Processes

### 2.1 Project Conception
1. Each Project shall be approved by The Pilot Club Inc. Board of Directors or The Pilot Club Chief Technology Officer depending on the request.

2. Should any member of the Tech Team wish to propose a project, they should first ask the Director of Technology or CTO/VPT to verify that project can and will improve The Pilot Club Inc. web service footprint.

3. After Approval, members should refer to Section 2.2 of this document for the development process.

4. Should the project need a new DNS record added to the domain and/or need SSO credentials, the CTO/VPT shall execute those requests within 48 hours of request, once approval from the TPC Board of Directors has been received.

### 2.2 Development Processes on Projects
1. After a project has been approved for development, the Director Of Technology or CTO/VPT shall create a GitHub repository (as applicable) for the project to reside.

2. Members of the Tech Team may develop in their own ways, so long as the code resides in GitHub as the primary source for the code.
    1. Member shall test their code before submitting a pull request or code review. This allows for the members to debug and make corrections on their own without having many corrections needing to be made.
    2. Members shall not code from the main or development branch of the repository that they are working on as this eliminates the mistake of pushing code to the production/development environment that causes errors or does not work. All development code shall be done in a branch designated as such.

### 2.3 Code Review
1. Once code is ready for deployment to the production and/or development environment, the Director of Technology or CTO/VPT shall review the code via GitHub Pull request. All team members shall request a review via GitHub Pull Request Reviewers function.

    1. Code review consists of verifying that the developed code works as advertised and will not cause any issues once in the production and/or development environment.

        1. If code needs further work, the reviewer will make notes within the pull request with what needs to be completed.

        2. If no further changes need to be made, the code shall be approved and pushed to production within 48 hours (unless extenuating circumstances exist).

### 2.4 Deployment Of Projects
1. Once a code review has been completed and approved, a GitHub action will automatically push a docker image to Digital Ocean for server usage.

2. Should the project be new, the Director of Technology or CTO/VPT shall create a folder within the “Deployments” repository when deploying the project.
   1. The deployment folder should include the following on as needed basis based on the requirements of the project:
      - Deployment YAML
      - Service YAML
      - Virtual Service YAML
      - Doppler Secrets YAML (More Described Below)
      - Other YAML's as needed

## 3. Production Environment / Kubernetes Management

**All code that has been approved for the production environment shall be deployed to the TPC Kubernetes Cluster unless otherwise specified.**

### 3.1 Access to the Production Environment

1. Access to The Pilot Club Development Production Environment shall only be given to designated individuals by direction of the CTO/VPT

   1. Members with Server Access shall not disseminate the log on credentials to anyone not approved by the CTO/VPT. 
   2. Admin Access to any of the Tech Team members will be decided on a case by case basic by the CTO/VPT. This includes any of the Supporting Systems attached to the Tech Team.
   
2. Should any member of The Pilot Club Tech Team feel as if they need access to the Production Environment, they may request it from the Director of Technology or CTO/VPT at tech-lead@thepilotclub.org

### 3.2 Google Workspace

1. Each member of the Tech Team shall be issued a TPC Google Workspace account and associated email account.

#### 3.2.1 Organization Google Workspace Management

   1. The Pilot Club Information Technology Team is tasked with the management of The Pilot Club Inc. Google Workspace.
      1. When a new staff member is conducting their onboarding within the organization, a user account will be created with the following information:
         1. The members first name
         2. The members last name
         3. A Secondary Email that is current and reachable
      2. Upon account creation, the Tech Team member shall send a password reset email via the prompt to the member so that the member can log in
      3. Once account is create, the Tech Team Member shall add the member to the appropriate groups within Google Workspace.

### 3.3 Argo CD

1. Argo CD is used for the management of kubernetes deployments and systems. This allows any member of the team to be able to manage their own project's resources without having to have any external assistance.

2. Argo CD permissions are based on GitHub teams. Each member of the team will have basic level access to Argo which allows for syncing, restarting, and retrieving logs.

3. Each member of the Tech Team shall have an onboarding session with the Director of Technology or CTO/VPT on the use of Argo CD and what rules are associated with the system.

### 3.4 Doppler Secrets Management

1. Doppler Secrets Manager allows for certain Team Members of The Pilot Club's Tech Team to have access to the secrets on the deployed site(s) or resources within TPC Ecosystem. 

2. When using Doppler, members are expected to not share any of the secrets or use the secrets for any of their own use case

   1. Any member found to be using a TPC Secret outside the doppler system incorrectly, without authorization, shall be removed from the system and not be allowed to use the system until further notice
   
3. Each member of the team who gets access to the Doppler System will go through an onboarding session with the Director Of Technology or CTO/VPT to ensure that they know how to use the system and the rules involved with it.

4. Any questions in reference to this system can be directed to the Director Of Technology or CTO/VPT.

### 3.5 Grafana Logs and Metrics System

1. Each Member of the Tech Team shall have basic level access to the Grafana system to allow them to see the current metrics of the kubernetes cluster, and see logs within the last 14 days.

2. Each Member of the Tech Team should have an onboarding session with the Director Of Technology or CTO/VPT to allow them to understand how to use the system and to know the rules and involved with it.

### 3.6 Sentry Error Logging

1. Should a project have Sentry implemented, Tech Team Members shall create a Sentry Account upon hiring, or when the project is added to sentry whichever comes first.
2. The Tech Team will send an automated email to the Tech Team Members Google Workspace Email for the purpose of sending an account creation link.
   1. Once an account is made, members of the tech team will be notified of errors via email as well as in the "GitHub Notifications" chanel within the TPC discord.
   2. Team members should respond to the errors quickly, and have a fix within 48 hours, circumstances depending on the project.
      1. Should a fix not be viable within 48 hours of the error occurring, the Director Of Technology or CTO/VPT shall inform the TPC Board of Directors of the issue and what is being done to rectify it.

## 4. New Team Members

### 4.1 Application Process

1. Members of The Pilot Club may apply to the Tech Team at anytime via https://forms.gle/tDnudHRUXx1GWFpD8

2. Applications will be reviewed as they are received. An application does not constitute an interview, nor does it constitute a position within the Tech Team.

### 4.2 Interview Process

1. The Pilot Club requires interviews for all candidates interested in joining a staff team, including the Technology Team.

2. During the Interview process, the following personal should be present:

    1. TPC Chief Technology Officer

    2. TPC Director Of Technology

    3. TPC Board Of Director Member(s)

3. Questions asked during the interview process shall be prepared at least 24 hours prior to the interview

### 4.3 Rejection from the Tech Team

1. Should your application or interview process not be adequate to be accepted on to the Tech Team, applying members shall receive a rejection notice within 7 days of the interview.

### 4.4 Acceptance to the Tech Team

1. Should an applicant be deemed as a good fit for The Pilot Club Inc. Tech Team, the applicant shall receive an email within 7 days of the interview with further instructions.