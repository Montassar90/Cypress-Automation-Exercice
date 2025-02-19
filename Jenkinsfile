pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            stages {
                stage('Test on Chrome Browser') {
                    steps {
                        bat 'npm run chromeTest'
                    }
                }
                stage('Test on Firefox Browser') {
                    steps {
                        bat 'npm run firefoxTest'
                    }
                }
                stage('Test on Edge Browser') {
                    steps {
                        bat 'npm run edgeTest'
                    }
                }
            }
            post {
                always {
                    script {
                        archiveArtifacts artifacts: 'reports/html/index.html', allowEmptyArchive: true
                    }
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: 'cypressAutomation\cypress\reports\html\index.html',
                        reportFiles: 'index.html',
                        reportName: 'HTML Report'
                    ])
                }
                failure {
                    echo 'Build failed. Check the test reports for details.'
                }
            }
        }
    }
}
