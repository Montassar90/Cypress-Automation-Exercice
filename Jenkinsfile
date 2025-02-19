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
            stages { // Les sous-stages sont exécutés l'un après l'autre
                stage('Test on Chrome Browser') {
                    steps {
                        bat 'npm run chromeTest'
                    }
                }
                stage('Test on Edge Browser') {
                    steps {
                        bat 'npm run edgeTest'
                    }
                }
            }
            post {
                failure {
                    echo 'Build failed. Check the test reports for details.'
                }
            }
        }
    }
}
