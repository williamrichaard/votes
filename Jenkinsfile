pipeline {
    agent {
        docker {
            image 'cypress/base:latest'
        }
    }
    stages {
        stage ('Setup') {
            steps {
                sh "npm ci"
            }
        }
        stage ('Tests') {
            steps {
                sh "npm run cucumber TAGS=$tags"
            }
        }
    }
    post {
        always {
            script {
                cucumber fileIncludePattern: '**/*.json', jsonReportDirectory: 'report/json', sortingMethod: 'ALPHABETICAL'
            }
        }
    }
}