#!/bin/bash

# Download sample images using curl

# Profile picture (Unsplash)
curl -L "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" -o profile.jpg

# Project images
curl -L "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" -o project-1.jpg
curl -L "https://images.unsplash.com/photo-1460925895917-adf4e565d871?w=400&h=250&fit=crop" -o project-2.jpg
curl -L "https://images.unsplash.com/photo-1526374965328-7f5ae4e8b328?w=400&h=250&fit=crop" -o project-3.jpg
curl -L "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=250&fit=crop" -o project-4.jpg
curl -L "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop" -o project-5.jpg

 All images downloaded successfully!"echo "
