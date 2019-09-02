# Kubernetes-stellar

Interact with your kubernetes cluster in style.. just by starting a pod. :) <br/>
<br/>
View pod logs, details and cluster events with a single click. <br/>
 <br/>
Delete pods and watch the cluster orchestration do its work. <br/>
<br/>
This version is built on Nodejs and everything is done from within the pod and cluster.  <br/>
No sidecar needed, no kubectl proxy needed. <br/>
<br/>
Make sure the pod has enough rights to read other pods and query kube-apiserver (it will use the pod serviceaccount rights). <br/>
<br/>
Also working with Minikube. <br/>
<br/>
![](/stellar2.gif)
<br/>
## Prerequisites <br/>
Get up and running with included yamls: <br/>
kubectl apply -f 1-deployment.yaml <br/> 
kubectl apply -f 2-service.yaml <br/>
minikube service kubernetes-stellar <br/>
<br/>
This should open your browser and the page will show. <br/>
<br/>
Without yamls files: <br/>
kubectl create deployment kubernetes-stellar --image=reneschoonrok/kubernetes-stellar:latest <br/>
kubectl expose deployment kubernetes-stellar --type=LoadBalancer --port=8080 <br/>
minikube service kubernetes-stellar <br/>
<br/>
If you are not on minikube but on a full cluster than expose via loadbalancer/ingress etc.
<br/>
Cleanup: <br/>
kubectl delete service kubernetes-stellar <br/>
kubectl delete deployment kubernetes-stellar <br/>
<br/>
See deployment yaml for the TOKEN env var which can give rights to logfiles and pod deletion. <br/>
<br/>
<br/>
### Credits.. <br/>
 <br/>
pixelcave for css web design  <br/>
https://pixelcave.com <br/>

Godaddy kubernetes-client: <br/>
https://github.com/godaddy/kubernetes-client <br/>

