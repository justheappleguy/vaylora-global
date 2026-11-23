'use client';

import { useState } from 'react';
import { country, countryList } from '../lib/countries';

export default function Home() {
  const [sendCountry, setSendCountry] = useState('AE');
  const [receiveCountry, setReceiveCountry] = useState('IN');
  const [amount, setAmount] = useState('1000');
  const [compared, setCompared] = useState(false);
  const sending = country(sendCountry);
  const receiving = country(receiveCountry);

  return (
    <main>
      <header className="header">
        <a className="brand" href="/" aria-label="Vaylora Global home"><span className="brand-mark">V</span><span>VAYLORA <small>GLOBAL</small></span></a>
        <nav aria-label="Main navigation"><a href="#compare">Compare rates</a><a href="#how-it-works">How it works</a></nav>
        <span className="preview-label">Pre-launch preview</span>
      </header>
      <section className="hero">
        <div className="intro">
          <p className="eyebrow">INDEPENDENT REMITTANCE COMPARISON</p>
          <h1>Find the best way to send money <span>home.</span></h1>
          <p className="lead">Compare exchange rates, transfer fees and the amount your recipient actually receives. More clarity. More confidence.</p>
          <a className="text-link" href="#how-it-works">Simple steps. No money transfers here. <span aria-hidden="true">↗</span></a>
          <div className="principles"><span>Payout-first comparisons</span><span>Transparent fees</span><span>Independent rankings</span></div>
        </div>
        <section className="calculator" id="compare" aria-labelledby="calculator-title">
          <div className="card-heading"><span className="eyebrow">YOUR TRANSFER</span><span className="step">01 / COMPARE</span></div>
          <h2 id="calculator-title">Where are you sending?</h2>
          <p className="card-description">Choose your countries and transfer amount.</p>
          <form onSubmit={event => { event.preventDefault(); setCompared(true); }} onChange={() => setCompared(false)}>
            <label htmlFor="send-country">You are sending from</label>
            <select id="send-country" value={sendCountry} onChange={event => setSendCountry(event.target.value)}>{countryList.map(item => <option key={item.code} value={item.code}>{item.name} · {item.currency}</option>)}</select>
            <label htmlFor="receive-country">Your recipient is in</label>
            <select id="receive-country" value={receiveCountry} onChange={event => setReceiveCountry(event.target.value)}>{countryList.map(item => <option key={item.code} value={item.code}>{item.name} · {item.currency}</option>)}</select>
            <label htmlFor="amount">You send <span>{sending?.currency}</span></label>
            <input id="amount" type="number" min="0.01" step="0.01" required value={amount} onChange={event => setAmount(event.target.value)} />
            <div className="presets" aria-label="Preset transfer amounts">{['500', '1000', '2500'].map(value => <button key={value} type="button" aria-pressed={amount === value} onClick={() => { setAmount(value); setCompared(false); }}>{Number(value).toLocaleString('en-US')}</button>)}</div>
            <button className="primary" type="submit">Compare exchange rates <span aria-hidden="true">→</span></button>
          </form>
          <p className="privacy">We compare. You transfer with the provider.</p>
          {compared && <div className="result" role="status"><strong>No verified quotes available</strong><p>{amount} {sending?.currency} · {sending?.name} to {receiving?.name}. Provider data is not connected yet. No live rates or best payout can be shown.</p></div>}
        </section>
      </section>
      <section className="data-status" aria-label="Market data availability"><span className="status-dot" aria-hidden="true" /><div><strong>Live provider data is not connected yet</strong><p>0 providers reporting quotes · No verified update time or recipient payout available.</p></div><span className="status-tag">Awaiting data</span></section>
      <section className="how" id="how-it-works"><div className="section-heading"><p className="eyebrow">A CLEARER WAY TO COMPARE</p><h2>Four steps. One informed choice.</h2></div><div className="steps">{[
        ['01', 'Choose your countries', 'Tell us where you’re sending from and where your recipient is.'],
        ['02', 'Enter your amount', 'Compare the transfer amount that matters to you.'],
        ['03', 'Compare recipient payouts', 'When verified quotes are available, see the amount received after fees.'],
        ['04', 'Visit the provider', 'Complete your transfer on the provider’s official website, not here.']
      ].map(([number, title, description]) => <article key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <footer><strong>VAYLORA GLOBAL</strong><p>Rates and fees are subject to change. Final amounts and transfer conditions are confirmed by the selected provider. Vaylora Global is an independent comparison platform and does not process money transfers.</p><span>Development preview · Not ready for public launch</span></footer>
    </main>
  );
}
