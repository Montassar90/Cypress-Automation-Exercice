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
            stage('Test on Chrome Browser') {
                steps {
                    bat 'npm chromeTest'
                }
            }
            stage('Test on Firefox Browser') {
                steps {
                    bat 'npm firefoxTest'
                }
            }
            stage('Test on Edge Browser') {
                steps {
                    bat 'npm edgeTest'
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
                  reportDir: 'cypress/cypress/reports/html',
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
