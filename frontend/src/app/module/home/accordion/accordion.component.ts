// accordion.component.ts
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() items = [
    {
      id: '1',
      title: 'What is Spotify?',
      description: 'Spotify is a digital music streaming service that gives you access to millions of songs, podcasts, and videos from artists all over the world. You can listen to music for free with ads or subscribe to Spotify Premium for an ad-free experience.'
    },
    {
      id: '2',
      title: 'How much does Spotify cost?',
      description: 'Spotify offers a free plan with ads and limited features. Spotify Premium costs $9.99 per month and gives you access to ad-free music, offline listening, and higher audio quality. There are also family and student plans available at discounted rates.'
    },
    {
      id: '3',
      title: 'Can I download music on Spotify?',
      description: 'Yes, with Spotify Premium, you can download songs, albums, playlists, and podcasts to listen to offline. This is great for when you\'re traveling or in an area with limited internet connectivity.'
    },
    {
      id: '4',
      title: 'How does Spotify recommend music?',
      description: 'Spotify uses a combination of algorithms and human curation to recommend music to you. The algorithms analyze your listening habits, liked songs, and playlists to suggest music you might like. Spotify also offers personalized playlists like Discover Weekly and Release Radar.'
    },
    {
      id: '5',
      title: 'Can I share my Spotify account with others?',
      description: 'Yes, Spotify allows you to create a Family plan that lets you share your account with up to six people who live at the same address. Each member gets their own account and can listen to music independently.'
    },
     {
    id: '6',
    title: 'How can I create playlists on Spotify?',
    description: 'To create a playlist on Spotify, simply go to the "Your Library" section and click on "Create Playlist." Give your playlist a name and start adding songs to it. You can add songs from Spotify\'s library or upload your own music.'
  },
  {
    id: '7',
    title: 'Can I listen to Spotify offline?',
    description: 'Yes, Spotify Premium allows you to download music and podcasts for offline listening. Simply download the content to your device while connected to the internet, and you can listen to it offline.'
  },
  {
    id: '8',
    title: 'Is Spotify available in my country?',
    description: 'Spotify is available in many countries around the world. You can check the Spotify website or app to see if it is available in your country.'
  },
  {
    id: '9',
    title: 'How can I cancel my Spotify Premium subscription?',
    description: 'To cancel your Spotify Premium subscription, go to your account settings and select "Subscription." From there, you can choose to cancel your subscription. Your subscription will remain active until the end of the current billing period.'
  },
  {
    id: '10',
    title: 'Can I use Spotify on multiple devices?',
    description: 'Yes, you can use Spotify on multiple devices with the same account. Spotify Premium allows you to listen on up to three devices at the same time.'
  },
  {
    id: '11',
    title: 'Does Spotify offer a student discount?',
    description: 'Yes, Spotify offers a student discount for eligible students. You can get Spotify Premium for half price with a student discount.'
  },
  {
    id: '12',
    title: 'What is Spotify Connect?',
    description: 'Spotify Connect allows you to play music on different devices using the Spotify app as a remote control. You can use Spotify Connect to play music on speakers, TVs, and other devices.'
  },
  {
    id: '13',
    title: 'Can I listen to Spotify in my car?',
    description: 'Yes, you can listen to Spotify in your car. Many newer car models come equipped with Spotify integration, or you can use Bluetooth or an auxiliary cable to connect your phone to your car stereo.'
  },
  {
    id: '14',
    title: 'Does Spotify offer a family plan?',
    description: 'Yes, Spotify offers a Family plan that allows you to share your account with up to six family members. Each member gets their own account and can listen independently.'
  },
  {
    id: '15',
    title: 'How does Spotify curate playlists?',
    description: 'Spotify curates playlists using a combination of algorithms and human editors. The algorithms analyze user listening habits and preferences, while human editors curate playlists based on themes, genres, and moods.'
  }
  ];
  
  openItem: string = '';

  toggleItem(id: string): void {
    this.openItem = this.openItem === id ? '' : id;
  }
}
