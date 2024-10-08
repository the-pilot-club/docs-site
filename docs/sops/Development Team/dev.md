---
sidebar_position: 1
---
# Development Team SOP

## A Word from the founder
Thank you for stepping up and fulfilling a leadership position in the Club. As a Staff member, Club members will look to you for leadership and guidance. You should strive to provide that, in order to make our members’ experience here a great one!

Everything you do here should focus on providing a quality experience for TPC members. I ask you to lead by example, in words and actions. Your contributions to the Club in this manner are greatly appreciated and valued. You have a direct impact on retaining members and growing the Club.

Let’s make this Club a great place for flightsim enthusiasts to be a part of

## 1. Scope Of Responsibility

### 1.1 Development Team Lead
1. The Dev Team Lead is responsible for all team members.

2. Responsible for upkeep and maintenance of the TPC Web Servers and associated components.

3. Directs Dev Team Members in the various projects in development and deployment

### 1.2 Deputy Development Team Lead
1. Assists Dev Team Lead in their duties and can fill in as the Dev Team lead in the case of absence or vacation.

2. Acts a delegate to the Dev Team Lead and has the same responsibilities as such.

### 1.3 Development Team Member
1. Aid the Dev Team lead and Deputy Dev Team Lead by developing code and projects to an acceptable level for The Pilot Club Production environment.

2. Developers are expected to put aside at least 2 hours per week to work on TPC related web services.

3. Each developer will be assigned to a team from the following list. Developers may request to put on a team, but the Dev Team Lead / Deputy Dev Team Lead may assign them to another team based on experience.

    1. Discord Bot Team
    2. Core API Team
    3. Flight Crew Portal Team
    4. Database Management and Outline team
    5. Quality Assurance Team
    6. Devops Team
    7. Trust and Safety Team
    8. Floater / Misc Team 
   
4. The outline for each one of these teams can be found in the Teams Folder of this section.

5. To join the Dev Team, developers should look in [Section 4](#4-new-team-members) of this document. 

## 2. Development Processes

### 2.1 Project Conception
1. Each Project shall be approved by either the Founder of The Pilot Club and/or the Dev Team lead.

2. Should any member of the Dev Team wish to propose a project, they should first ask the Deputy Dev Team Lead and/or Dev Team Lead to verify that project can and will improve The Pilot Club web service footprint.

3. After Approval, members should refer to Section 2.2 of this document for the development process.

4. Should the project need a new DNS record added to the domain and/or need SSO credentials, the Dev Team Lead shall execute those requests within 48 hours of request, once approval from the TPC Founder has been received.

### 2.2 Development Processes on Projects
1. After a project has been approved for development, the Dev Team Lead or Deputy Dev Team Lead shall create a GitHub repository (as applicable) for the project to reside.

2. Members of the Dev Team may develop in their own ways, so long as the code resides in GitHub as the primary source for the code.
    1. Member shall test their code before submitting a pull request or code review. This allows for the members to debug and make corrections on their own without having many corrections needing to be made.
    2. Members shall not code from the main or development branch of the repository that they are working on as this eliminates the mistake of pushing code to the production/development environment that causes errors or does not work. All development code shall be done in a branch designated as such.

### 2.3 Code Review
1. Once code is ready for deployment to the production and/or development environment, the Dev Team Lead and/or Deputy Dev Team Lead shall review the code via GitHub Pull request. All team members shall request a review via GitHub Pull Request Reviewers function.

    1. Code review consists of verifying that the developed code works as advertised and will not cause any issues once in the production and/or development environment.

        1. If code needs further work, the reviewer will make notes within the pull request with what needs to be completed.

        2. If no further changes need to be made, the code shall be approved and pushed to production within 48 hours (unless extenuating circumstances exist).

### 2.4 Deployment Of Projects
1. Once a code review has been completed and approved, a GitHub action will automatically push a docker image to Digital Ocean for server usage.

2. Should the project be new, the Dev Team Lead and/or Deputy Dev Team Lead shall create a folder within the “Deployments” repository when deploying the project.
   1. The deployment folder should include the following on as needed basis based on the requirements of the project:
      - Deployment YAML
      - Service YAML
      - Virtual Service YAML
      - Doppler Secrets YAML (More Described Below)
      - Other YAML's as needed

## 3. Production Environment / Kubernetes Management

**All code that has been approved for the production environment shall be deployed to the TPC Kubernetes Cluster unless otherwise specified.**

### 3.1 Access to the Production Environment

1. Access to The Pilot Club Development Production Environment shall only be given to designated individuals by direction of the Dev Team Lead

   1. Members with Server Access shall not disseminate the log on credentials to anyone not approved by the Dev Team Lead. 
   2. Admin Access to any of the Dev Team members will be decided on a case by case basic by the Dev Team Lead. This includes any of the Supporting Systems attached to the Dev Team.
   
2. Should any member of The Pilot Club Dev Team feel as if they need access to the Production Environment, they may request it from the Dev Team Lead at dev-lead@thepilotclub.org

### 3.3 Argo CD

1. Argo CD is used for the management of kubernetes deployments and systems. This allows any member of the team to be able to manage their own project's resources without having to have any external assistance.

2. Argo CD permissions are based on GitHub teams. Each member of the team will have basic level access to Argo which allows for syncing, restarting, and retrieving logs.

3. Each member of the Dev Team shall have an onboarding session with the Dev Team Lead on the use of Argo CD and what rules are associated with the system.

### 3.5 Doppler Secrets Management

1. Doppler Secrets Manager allows for certain Team Members of The Pilot Club's Dev Team to have access to the secrets on the deployed site(s) or resources within TPC Ecosystem. 

2. When using Doppler, members are expected to not share any of the secrets or use the secrets for any of their own use case

   1. Any member found to be using a TPC Secret outside the doppler system incorrectly, without authorization, shall be removed from the system and not be allowed to use the system until further notice
   
3. Each member of the team who gets access to the Doppler System will go through an onboarding session with the Dev Team Lead to ensure that they know how to use the system and the rules involved with it.

4. Any questions in reference to this system can be directed to the Dev Team lead.

### 3.6 Grafana Logs and Metrics System

1. Each Member of the Dev Team shall have basic level access to the Grafana system to allow them to see the current metrics of the kubernetes cluster, and see logs within the last 14 days.

2. Each Member of the Dev Team should have an onboarding session with the Dev Team Lead to allow them to understand how to use the system and to know the rules and involved with it.

### Sentry Error Logging

1. Should a project have Sentry implemented, Dev Team Members shall create a Sentry Account upon hiring, or when the project is added to sentry whichever comes first.
2. The Dev Team will send an automated email from Sentry to the member joining instructing them on either creating an account or adding them to the TPC Organization 
   1. Once an account is made, members of the dev team will be notified of errors via email as well as in the "GitHub Notifications" chanel within the TPC discord.
   2. Team members should respond to the errors quickly, and have a fix within 48 hours, circumstances depending on the project.
      1. Should a fix not be viable within 48 hours of the error occurring, the Dev Team lead shall inform the TPC founder of the issue and what is being done to rectify it.

## 4. New Team Members

### 4.1 Application Process

1. Members of The Pilot Club may apply to the Dev Team at anytime via https://forms.gle/tDnudHRUXx1GWFpD8

2. Applications will be reviewed as they are received. An application does not constitute an interview, nor does it constitute a position within the Dev Team.

### 4.2 Interview Process

1. The Pilot Club requires interviews for all candidates interested in joining a staff team, including the Development Team.

2. During the Interview process, the following personal should be present:

    1. TPC Dev Team Lead

    2. TPC Deputy Dev Team Lead

    3. TPC Founder

3. Questions asked during the interview process shall be prepared at least 24 hours prior to the interview

### 4.3 Rejection from the Dev Team

1. Should your application or interview process not be adequate to be accepted on to the Dev Team, applying members shall receive a rejection notice within 7 days of the interview.

### 4.4 Acceptance to the Dev Team

1. Should an applicant be deemed as a good fit for The Pilot Club Dev Team, the applicant shall receive an email within 7 days of the interview with further instructions.