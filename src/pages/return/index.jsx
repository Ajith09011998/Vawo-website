import { motion } from 'framer-motion'

export default function Return() {
    return (
        <div>
            {/* terms and condition banner */}
            <div className="contactus-banner h-96 bg-overlay-black flex items-center justify-center">
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-white text-center flex flex-col gap-5'>
                    <h1 className='text-4xl md:text-6xl font-bold italic'>
                        Return Policy
                    </h1>
                </motion.div>
            </div>
            <div className='max-w-6xl mx-auto px-4 py-10 '>
                <header>
                    <h1 className="text-2xl">Return & Exchange Policy</h1>
                    <p className="text-xl">Your satisfaction is our priority</p>
                </header>

                <div className="terms-container">
                    <div className="note">
                        At lemuriavawo.org, we are committed to ensuring your satisfaction with every purchase. If you receive damaged or defective clothing items, we offer a seamless return and exchange process.
                    </div>

                    <div className="section">
                        <div className="section-title">
                            <span className="section-icon">⚠️</span>
                            <span>Damaged or Defective Items</span>
                        </div>
                        <div className="policy-item">If you receive clothing items that are damaged or defective, please contact our customer support team within <span className="highlight">7 days</span> of receiving your order.</div>
                        <div className="policy-item">We will guide you through the return or exchange process and provide the necessary instructions.</div>
                    </div>

                    <div className="section">
                        <div className="section-title">
                            <span className="section-icon">🔄</span>
                            <span>Return & Exchange Conditions</span>
                        </div>
                        <div className="policy-item">Clothing items must be returned in their <span className="highlight">original condition</span>, with tags attached and in unworn condition.</div>
                        <div className="policy-item">The return must be initiated within <span className="highlight">7 days</span> of receiving the order.</div>
                        <div className="policy-item">All return shipping charges for damaged or defective items will be covered by lemuriavawo.org.</div>
                    </div>

                    <div className="section">
                        <div className="section-title">
                            <span className="section-icon">💸</span>
                            <span>Refund Policy</span>
                        </div>
                        <div className="policy-item">Refunds for eligible damaged/defective items will be processed within <span className="highlight">7 business days</span> after we receive and verify the returned items.</div>
                        <div className="policy-item">Your original payment method will be credited (bank processing times may vary).</div>
                    </div>

                    <div className="section">
                        <div className="section-title">
                            <span className="section-icon">✖️</span>
                            <span>Cancellation Policy</span>
                        </div>
                        <div className="policy-item">Orders can only be canceled if they haven't been shipped yet.</div>
                        <div className="policy-item">Shipped orders cannot be canceled but may be returned upon receipt.</div>
                    </div>

                    <div className="section">
                        <div className="section-title">
                            <span className="section-icon">📌</span>
                            <span>Things to Consider</span>
                        </div>
                        <div className="policy-item">Carefully review product descriptions, sizes, and colors before purchasing.</div>
                        <div className="policy-item">Double-check your shipping address accuracy.</div>
                        <div className="policy-item">Document any package damage upon delivery and notify us immediately.</div>
                        <div className="policy-item">Keep original packaging for returns/exchanges.</div>
                    </div>

                    <div className="note">
                        For assistance with returns, refunds, exchanges, or cancellations, contact our customer support team. We're dedicated to your satisfaction with your <a href="lemuriavawo.org">lemuriavawo.org</a> shopping experience.
                    </div>
                </div>
            </div>
        </div>
    )
}
