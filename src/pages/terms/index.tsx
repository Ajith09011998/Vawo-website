import React from 'react'
import { motion } from 'framer-motion'

export default function Terms() {
    return (
        <div>
            {/* terms and condition banner */}
            <div className="contactus-banner h-96 bg-overlay-black flex items-center justify-center">
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-white text-center flex flex-col gap-5'>
                    <h1 className='text-4xl md:text-6xl font-bold italic'>
                        Terms and Condition
                    </h1>
                </motion.div>
            </div>
            <div className='max-w-6xl mx-auto px-4 py-10 '>
                <header>
                    <h1 className="text-2xl">Terms & Conditions</h1>
                    <p className="text-xl">Your seamless shopping experience starts here</p>
                </header>

                <div className="terms-container">
                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">✅</span>
                            <span>Order Confirmation & Modifications</span>
                        </div>
                        <div className="term-content">
                            Orders confirmed with payment <span className="highlight">cannot be altered or canceled</span>.
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">💳</span>
                            <span>Payment & Stock Availability</span>
                        </div>
                        <div className="term-content">
                            Payment processed after stock confirmation. Unavailable items = alternatives/refund.
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">🌍</span>
                            <span>Local Taxes & Duties</span>
                        </div>
                        <div className="term-content">
                            Customers bear VAT/customs duties (not included in product cost).
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">📄</span>
                            <span>GST Invoice (India)</span>
                        </div>
                        <div className="term-content">
                            Provide GST number at checkout for refund claims.
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">⚠️</span>
                            <span>Stock & Substitutes</span>
                        </div>
                        <div className="term-content">
                            If items are unavailable, we'll suggest alternatives.
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">🏷️</span>
                            <span>Branding</span>
                        </div>
                        <div className="term-content">
                            We may add our logo/website without affecting product quality.
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">✏️</span>
                            <span>Customization</span>
                        </div>
                        <div className="term-content">
                            Subject to approval. Minor variations possible. Errors post-approved proofs are our responsibility.
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">🎨</span>
                            <span>Color Variation</span>
                        </div>
                        <div className="term-content">
                            Screen vs. print colors may differ. <span className="highlight">Tip:</span> Order a sample first.
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">🔍</span>
                            <span>Printing Errors</span>
                        </div>
                        <div className="term-content">
                            We fix errors <span className="highlight">after</span> proof approval (not for mistakes in customer-approved designs).
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">🖌️</span>
                            <span>Manual Printing</span>
                        </div>
                        <div className="term-content">
                            Slight text color variations may occur.
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">✉️</span>
                            <span>Envelopes</span>
                        </div>
                        <div className="term-content">
                            Not self-adhesive by default.
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">🚚</span>
                            <span>Shipping</span>
                        </div>
                        <div className="term-content">
                            Delays/damages during transit? Not our responsibility.
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">📑</span>
                            <span>Invoices</span>
                        </div>
                        <div className="term-content">
                            Issued under <span className="highlight">"Lovely Offset Printers Private Limited."</span>
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">🆓</span>
                            <span>Proof Revisions</span>
                        </div>
                        <div className="term-content">
                            3 free proofs. Extra changes = charges apply.
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">🖨️</span>
                            <span>Printing Outcomes</span>
                        </div>
                        <div className="term-content">
                            Final result depends on <span className="highlight">approved layouts</span>. Pay for proofs to preview.
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">📏</span>
                            <span>Product Sizing</span>
                        </div>
                        <div className="term-content">
                            Ensure correct size for optimal text placement.
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">⚖️</span>
                            <span>Unresolved Issues</span>
                        </div>
                        <div className="term-content">
                            Our decision is final.
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">✂️</span>
                            <span>Design-Yourself Items</span>
                        </div>
                        <div className="term-content">
                            Double-check edits before approval!
                        </div>
                    </div>

                    <div className="term-item">
                        <div className="term-title">
                            <span className="term-icon">🚫</span>
                            <span>Liability</span>
                        </div>
                        <div className="term-content">
                            Not liable for losses beyond agreed limits.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
