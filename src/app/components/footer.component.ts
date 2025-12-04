import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email = signal('');
  subscriptionMessage = signal('');

  quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Founders', href: '#about' },
    { label: 'FitStreet', href: '#fitstreet' },
    { label: 'Services', href: '#services' }
  ];

  services = [
    'Fitness Training',
    'Mental Wellness',
    'Nutrition Plans',
    'Corporate Programs'
  ];

  legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Contact Us', href: '#contact' }
  ];

  subscribe() {
    if (!this.email().includes('@')) {
      this.subscriptionMessage.set('Please enter a valid email');
      setTimeout(() => this.subscriptionMessage.set(''), 3000);
      return;
    }

    this.subscriptionMessage.set('✓ Thank you for subscribing!');
    this.email.set('');
    setTimeout(() => this.subscriptionMessage.set(''), 3000);
  }
}
