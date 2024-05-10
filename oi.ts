pipeline {
    // o agent poderia ser maquina linux, windows, um container, um cluster Kubernetes
    agent any
    // bloco de passos da pipelines
    stages {
        stage('Build Image') {
            // passos de execucao do estagio
            steps {
                echo 'Iniciando a pipeline'
            }
        }
    }
}