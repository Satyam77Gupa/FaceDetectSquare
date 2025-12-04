import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  founders = [
    {
      name: 'Rajesh Sharma',
      role: 'Founder & CEO',
      description: 'Visionary leader with 20+ years in consumer-tech innovation',
      experience: '20+ Years',
      emoji: '👨‍💼',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Priya Mehta',
      role: 'Co-Founder & COO',
      description: 'Operations excellence expert scaling businesses across India',
      experience: '18+ Years',
      emoji: '👩‍💼',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Amit Patel',
      role: 'CTO & Tech Lead',
      description: 'AI/ML pioneer building next-gen wellness technology',
      experience: '15+ Years',
      emoji: '👨‍💻',
      gradient: 'from-green-400 to-green-600'
    },
    {
      name: 'Deepa Singh',
      role: 'Chief Wellness Officer',
      description: 'Holistic health expert with credentials in fitness & nutrition',
      experience: '16+ Years',
      emoji: '👩‍⚕️',
      gradient: 'from-pink-400 to-pink-600'
    }
  ];
}
