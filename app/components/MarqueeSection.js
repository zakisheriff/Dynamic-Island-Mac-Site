'use client';

const items = [
  'Music Controls', 'Notifications', 'Timer', 'Now Playing',
  'Battery Alerts', 'Calendar', 'AirDrop', 'Bluetooth',
  'Volume', 'Brightness', 'System Monitor', 'Drag & Drop',
  'Music Controls', 'Notifications', 'Timer', 'Now Playing',
  'Battery Alerts', 'Calendar', 'AirDrop', 'Bluetooth',
  'Volume', 'Brightness', 'System Monitor', 'Drag & Drop',
];

export default function MarqueeSection() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
