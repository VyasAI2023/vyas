// Pricing.js

import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Pricing = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className='header'>
        <div className='text'>Pricing</div>
        <div className='underline'></div>
      </div>
      <div className="relative rounded-[50px] border p-11 max-lg:px-3 bg-white m-5">
        
        <div className="lqd-tabs text-center">
          <div className="lqd-tabs-triggers mx-auto mb-9 inline-flex flex-wrap gap-2 rounded-md border text-[15px] font-medium leading-none">
            <button className="transition-all px-4 py-[0.35rem] min-w-[210px] rounded-lg hover:text-heading-foreground lqd-is-active"
              data-target="#pricing-monthly">
              Monthly
            </button>
          </div>
          <div className="lqd-tabs-content-wrap px-10 max-xl:px-0">
            <div className="lqd-tabs-content">
              <div id="pricing-monthly" style={{ display: 'block' }}>
                <div className="grid grid-cols-3 gap-2 max-md:grid-cols-1">
                  <div className="px-12 pt-7 pb-11 rounded-3xl text-center max-xl:px-6 max-lg:px-4">
                    <h6 className="mb-6 rounded-md border p-[0.35rem] text-[11px] text-opacity-80">Standard</h6>
                    <p className="mb-1 text-[45px] font-medium leading-none -tracking-wide text-heading-foreground">
                      <sup className="text-[0.53em]">$</sup>5.99
                    </p>
                    <p className="mb-4 text-sm opacity-60">per month</p>
                    <a className="mb-6 block w-full rounded-lg bg-black bg-opacity-[0.03] p-3 font-medium text-heading-foreground transition-colors hover:bg-black hover:text-white"
                      href="/login">
                      Select Standard
                    </a>
                    <ul className="px-3 text-left max-lg:p-0">
                      <li className="mb-4 flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.952 7.537L11.489 0L12.452 1L3.952 9.5L0 5.545L1 4.545L3.952 7.537Z"></path>
                          </svg>
                        </span>
                        10000 Word Limit
                      </li>
                      <li className="mb-4 flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.952 7.537L11.489 0L12.452 1L3.952 9.5L0 5.545L1 4.545L3.952 7.537Z"></path>
                          </svg>
                        </span>
                        20 Image Limit
                      </li>
                      <li className="mb-4 flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.952 7.537L11.489 0L12.452 1L3.952 9.5L0 5.545L1 4.545L3.952 7.537Z"></path>
                          </svg>
                        </span>
                        Model 1
                      </li>
                      <li className="mb-4 flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.952 7.537L11.489 0L12.452 1L3.952 9.5L0 5.545L1 4.545L3.952 7.537Z"></path>
                          </svg>
                        </span>
                        Standard Templates
                      </li>
                      <li className="mb-[0.625em] flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <strong>10,000</strong> Word Tokens
                      </li>
                      <li className="mb-[0.625em] flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <strong>15</strong> Image Tokens
                      </li>
                    </ul>
                  </div>
                  <div className="px-12 pt-7 pb-11 rounded-3xl text-center max-xl:px-6 max-lg:px-4">
                    <h6 className="mb-6 rounded-md border p-[0.35rem] text-[11px] text-opacity-80">Pro</h6>
                    <p className="mb-1 text-[45px] font-medium leading-none -tracking-wide text-heading-foreground">
                      <sup className="text-[0.53em]">$</sup>10.99
                    </p>
                    <p className="mb-4 text-sm opacity-60">per month</p>
                    <a className="mb-6 block w-full rounded-lg bg-black bg-opacity-[0.03] p-3 font-medium text-heading-foreground transition-colors hover:bg-black hover:text-white"
                      href="/login">
                      Select Pro
                    </a>
                    <ul className="px-3 text-left max-lg:p-0">
                      <li className="mb-4 flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.952 7.537L11.489 0L12.452 1L3.952 9.5L0 5.545L1 4.545L3.952 7.537Z"></path>
                          </svg>
                        </span>
                        20000 Word Limit
                      </li>
                      <li className="mb-4 flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.952 7.537L11.489 0L12.452 1L3.952 9.5L0 5.545L1 4.545L3.952 7.537Z"></path>
                          </svg>
                        </span>
                        40 Image Limit
                      </li>
                      <li className="mb-4 flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.952 7.537L11.489 0L12.452 1L3.952 9.5L0 5.545L1 4.545L3.952 7.537Z"></path>
                          </svg>
                        </span>
                        Model 2
                      </li>
                      <li className="mb-4 flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.952 7.537L11.489 0L12.452 1L3.952 9.5L0 5.545L1 4.545L3.952 7.537Z"></path>
                          </svg>
                        </span>
                        Premium Templates
                      </li>
                      <li className="mb-[0.625em] flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <strong>20,000</strong> Word Tokens
                      </li>
                      <li className="mb-[0.625em] flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <strong>25</strong> Image Tokens
                      </li>
                    </ul>
                  </div>
                  <div className="px-12 pt-7 pb-11 rounded-3xl text-center max-xl:px-6 max-lg:px-4">
                    <h6 className="mb-6 rounded-md border p-[0.35rem] text-[11px] text-opacity-80">Enterprise</h6>
                    <p className="mb-1 text-[45px] font-medium leading-none -tracking-wide text-heading-foreground">
                      <sup className="text-[0.53em]">$</sup>49.99
                    </p>
                    <p className="mb-4 text-sm opacity-60">per month</p>
                    <a className="mb-6 block w-full rounded-lg bg-black bg-opacity-[0.03] p-3 font-medium text-heading-foreground transition-colors hover:bg-black hover:text-white"
                      href="/login">
                      Select Enterprise
                    </a>
                    <ul className="px-3 text-left max-lg:p-0">
                      <li className="mb-4 flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.952 7.537L11.489 0L12.452 1L3.952 9.5L0 5.545L1 4.545L3.952 7.537Z"></path>
                          </svg>
                        </span>
                        100000 Word Limit
                      </li>
                      <li className="mb-4 flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.952 7.537L11.489 0L12.452 1L3.952 9.5L0 5.545L1 4.545L3.952 7.537Z"></path>
                          </svg>
                        </span>
                        200 Image Limit
                      </li>
                      <li className="mb-4 flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.952 7.537L11.489 0L12.452 1L3.952 9.5L0 5.545L1 4.545L3.952 7.537Z"></path>
                          </svg>
                        </span>
                        Model 3
                      </li>
                      <li className="mb-4 flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.952 7.537L11.489 0L12.452 1L3.952 9.5L0 5.545L1 4.545L3.952 7.537Z"></path>
                          </svg>
                        </span>
                        All Templates
                      </li>
                      <li className="mb-[0.625em] flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <strong>100,000</strong> Word Tokens
                      </li>
                      <li className="mb-[0.625em] flex items-center">
                        <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                        <strong>100</strong> Image Tokens
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
      <Footer />
    </div>
  );
}

export default Pricing;
