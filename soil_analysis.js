document.addEventListener('DOMContentLoaded', () => {

    // ── Load soil image passed via sessionStorage ──────────────────
    const storedImage = sessionStorage.getItem('soilAnalysisImage');
    const heroImg = document.getElementById('heroImg');
    if (storedImage && heroImg) {
        heroImg.src = storedImage;
    }

    // ── Unique analysis ID + date ──────────────────────────────────
    const idEl = document.getElementById('analysisId');
    const dateEl = document.getElementById('reportDate');
    if (idEl) idEl.textContent = 'SOIL-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    if (dateEl) {
        const now = new Date();
        dateEl.textContent = now.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    // ── Update Content Based on Soil Type ──────────────────────────
    const soilType = sessionStorage.getItem('analyzedSoilType') || 'alluvial-soil';
    
    if (soilType === 'black-soil') {
        document.querySelector('.report-grid').innerHTML = `
        <!-- Row 1: Responsive Hero Bento -->
        <section class="report-card hero-img-card" id="sec-hero-img">
            <div class="hero-image-wrap">
                <img id="heroImg" src="${storedImage}" alt="Soil Sample Image">
                <div class="hero-overlay"></div>
                <div class="hero-scan-complete">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C5F255" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Analysis Complete
                </div>
            </div>
        </section>

        <section class="report-card hero-info-card span-3" id="sec-hero-info">
            <p class="hero-eyebrow">🌱 AI BLACK SOIL REPORT</p>
            <h1>Black Soil (Regur Soil) – Complete <span>Analysis</span> for Project</h1>
            <p class="hero-sub">Detailed physicochemical diagnostics. Soil condition is currently evaluated as <strong>Highly Productive</strong>.</p>
            <div class="hero-stats">
                <div class="h-stat"><span class="h-val">7.5–8.5</span><span class="h-label">pH Level</span></div>
                <div class="h-divider"></div>
                <div class="h-stat"><span class="h-val">Clayey</span><span class="h-label">Texture</span></div>
                <div class="h-divider"></div>
                <div class="h-stat"><span class="h-val">80%</span><span class="h-label">Quality Index</span></div>
            </div>
        </section>

        <!-- 1 & 2. pH & Texture Detailed -->
        <section class="report-card span-4" style="background: rgba(255, 255, 255, 0.02); margin-top: 15px;">
            <div style="display:flex; flex-wrap:wrap; gap: 30px;">
                <div style="flex: 1; min-width: 250px;">
                    <h3 style="color:#C5F255; font-size:16px; margin-bottom:8px;">1. pH Level of Black Soil</h3>
                    <p class="hero-sub" style="margin-bottom: 10px; font-size: 14px; width:100%;">Black soil generally has a pH range of 7.5 to 8.5.<br>• Mostly neutral to moderately alkaline<br>• High alkalinity can sometimes limit nutrient availability<br><strong style="color:var(--text-base); margin-top:8px; display:block;">👉 Best suited for crops tolerant to slight alkalinity.</strong></p>
                </div>
                <div style="flex: 1; min-width: 250px;">
                    <h3 style="color:#C5F255; font-size:16px; margin-bottom:8px;">2. Texture of Black Soil</h3>
                    <p class="hero-sub" style="font-size: 14px; width:100%;">Black soil is typically:<br>• Clayey and fine-textured<br>• High shrink–swell capacity (cracks in summer, sticky in monsoon)<br><strong style="color:var(--text-base); margin-top:8px; display:block;">👉 Known as “self-ploughing soil” due to cracking nature.</strong></p>
                </div>
            </div>
        </section>

        <!-- 3. Detailed Soil Properties -->
        <section class="report-card soil-card span-4" id="sec-soil">
            <div class="card-header-line">
                <div class="card-icon orange"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg></div>
                <h2>3. Detailed Soil Properties & 4. Quality Index</h2>
            </div>
            
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 15px; text-align: left;">
                <div>
                    <h3 style="color:var(--text-base); margin-bottom:8px; font-size:16px;">Physical Properties</h3>
                    <ul style="color:var(--text-gray); font-size:14px; padding-left:20px; line-height:1.6;">
                        <li>Very high water retention capacity</li>
                        <li>Poor drainage (waterlogging possible)</li>
                        <li>Becomes sticky when wet and hard when dry</li>
                        <li>Deep soil profile (can be several meters thick)</li>
                    </ul>
                </div>
                <div>
                    <h3 style="color:var(--text-base); margin-bottom:8px; font-size:16px;">Chemical Properties</h3>
                    <ul style="color:var(--text-gray); font-size:14px; padding-left:20px; line-height:1.6;">
                        <li>Rich in lime, iron, magnesium, and alumina</li>
                        <li>High potash content</li>
                        <li>Deficient in nitrogen, phosphorus, and organic matter</li>
                        <li>Slightly alkaline reaction</li>
                    </ul>
                </div>
                <div>
                    <h3 style="color:var(--text-base); margin-bottom:8px; font-size:16px;">Biological Properties</h3>
                    <ul style="color:var(--text-gray); font-size:14px; padding-left:20px; line-height:1.6;">
                        <li>Moderate microbial activity</li>
                        <li>Improves with addition of organic manure</li>
                        <li>Supports long-duration crops due to moisture retention</li>
                    </ul>
                </div>
            </div>
            <div class="tip-box" style="margin-top:15px; background: rgba(197, 242, 85, 0.1); border: 1px solid rgba(197, 242, 85, 0.4); border-left: 4px solid #C5F255;">
                <strong>4. Soil Quality Index (Approximate):</strong> Fertility Index: 70% – 85% | Overall Soil Quality: ~ 75% – 85%<br>
                💡 <strong>👉 Excellent for specific crops (especially cotton), but needs management.</strong>
            </div>
        </section>

        <!-- 5. Fertilizer Recommendation -->
        <section class="report-card fertilizer-card span-4" id="sec-fertilizer">
            <div class="card-header-line">
                <div class="card-icon green"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"/><path d="m8 8 4-6 4 6"/><rect x="3" y="14" width="18" height="7" rx="1"/></svg></div>
                <h2>5. Recommended Amendments & Fertilizers</h2>
            </div>
            
            <div style="margin-bottom: 15px; font-size: 14px; color: var(--text-gray);">
                <strong style="color:var(--text-base);">Soil Amendments:</strong><br>
                • Farmyard manure (FYM) → improves structure & aeration<br>
                • Gypsum → helps reduce alkalinity and improves drainage<br>
                • Organic compost → enhances microbial activity
            </div>
            
            <div class="fert-grid">
                <div class="fert-item">
                    <div class="fert-circle n">N</div>
                    <div class="fert-info">
                        <span class="fert-name">Urea</span>
                        <span class="fert-note">Supplies nitrogen (major deficiency)</span>
                    </div>
                </div>
                <div class="fert-item">
                    <div class="fert-circle p" style="background: rgba(255, 155, 66, 0.2); color: #FF9B42;">DAP</div>
                    <div class="fert-info">
                        <span class="fert-name">Diammonium Phosphate</span>
                        <span class="fert-note">Improves phosphorus levels</span>
                    </div>
                </div>
                <div class="fert-item">
                    <div class="fert-circle p" style="background: rgba(255, 155, 66, 0.2); color: #FF9B42;">SSP</div>
                    <div class="fert-info">
                        <span class="fert-name">Single Super Phosphate</span>
                        <span class="fert-note">Useful for root development</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. Suitable Crops -->
        <section class="report-card growth-card span-4" id="sec-suitable">
            <div class="card-header-line">
                <div class="card-icon blue"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5-5 5-10 5-10S17 2 12 2 7 12 7 12s0 5 5 10z"/></svg></div>
                <h2>6. Top 5 Crops for Black Soil</h2>
            </div>
            <div class="suitable-crops-grid">
                <div class="sc-card">
                    <div class="sc-icon">🌿</div>
                    <div class="sc-name">Cotton</div>
                    <div class="sc-score">Most suitable ("Black Cotton Soil")</div>
                </div>
                <div class="sc-card">
                    <div class="sc-icon">🌱</div>
                    <div class="sc-name">Soybean</div>
                    <div class="sc-score">Thrives in moisture-retentive soil</div>
                </div>
                <div class="sc-card">
                    <div class="sc-icon">🌾</div>
                    <div class="sc-name">Jowar</div>
                    <div class="sc-score">Drought-resistant crop</div>
                </div>
                <div class="sc-card">
                    <div class="sc-icon">🥜</div>
                    <div class="sc-name">Groundnut</div>
                    <div class="sc-score">Suitable in well-drained patches</div>
                </div>
                <div class="sc-card">
                    <div class="sc-icon">🎋</div>
                    <div class="sc-name">Sugarcane</div>
                    <div class="sc-score">Benefits from high moisture retention</div>
                </div>
            </div>
        </section>

        <!-- 7. Climate Conditions -->
        <section class="report-card climate-card span-4" id="sec-climate">
            <div class="card-header-line">
                <div class="card-icon yellow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg></div>
                <h2>7. Climate & Regional Alignment</h2>
            </div>
            <div class="climate-compare" style="max-width: 800px; gap: 40px;">
                <div class="climate-col current">
                    <h3>Ideal Climate for Black Soil</h3>
                    <div class="climate-param"><span>Temperature</span><strong class="good">25°C – 40°C </strong></div>
                    <div class="climate-param"><span>Rainfall</span><strong class="good">50 – 100 cm</strong></div>
                    <div class="climate-param"><span>Location</span><strong class="good">Deccan Plateau (MH, MP, GJ)</strong></div>
                </div>
                <div class="climate-divider"></div>
                <div class="climate-col ideal">
                    <h3>Current Scenario (India context)</h3>
                    <div class="climate-param"><span>Temperature</span><strong class="warn">Rising temperature levels</strong></div>
                    <div class="climate-param"><span>Monsoon</span><strong class="warn">Erratic rainfall patterns</strong></div>
                    <div class="climate-param"><span>Water</span><strong class="warn">Scarcity in some regions</strong></div>
                </div>
            </div>
            <div class="climate-alert good-alert">
                🌤️ <strong>Soil–Climate Synergy:</strong> High moisture retention helps in dry conditions. Risk of waterlogging during heavy rainfall. Requires proper drainage and irrigation planning.
            </div>
        </section>

        <!-- 8. AI Recommendations -->
        <section class="report-card ai-card span-4" id="sec-ai">
            <div class="card-header-line">
                <div class="card-icon purple"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2M20 14h2M15 13v2M9 13v2"/></svg></div>
                <h2>8. AI Recommendations Summary 🤖</h2>
            </div>
            <div class="ai-summary-grid">
                <div class="ai-rec info-rec"><div class="ai-rec-icon">🌱</div><div class="ai-rec-content"><p>Use soil moisture sensors to avoid over-irrigation</p></div></div>
                <div class="ai-rec info-rec"><div class="ai-rec-icon">💧</div><div class="ai-rec-content"><p>Apply drip irrigation for efficient water use</p></div></div>
                <div class="ai-rec info-rec"><div class="ai-rec-icon">🔁</div><div class="ai-rec-content"><p>Practice crop rotation (cotton + pulses) to restore nitrogen</p></div></div>
                <div class="ai-rec positive-rec"><div class="ai-rec-icon">🌿</div><div class="ai-rec-content"><p>Increase organic matter to improve structure and fertility</p></div></div>
                <div class="ai-rec urgent-rec"><div class="ai-rec-icon">⚠️</div><div class="ai-rec-content"><p>Use balanced fertilizers to correct nutrient deficiencies</p></div></div>
                <div class="ai-rec info-rec"><div class="ai-rec-icon">📊</div><div class="ai-rec-content"><p>Adopt AI-based soil analysis tools for better decision-making</p></div></div>
            </div>
            <div class="tip-box" style="margin-top: 20px; text-align: left; background: rgba(197, 242, 85, 0.1); border-left: 4px solid #C5F255; padding: 15px;">
                <strong>✅ Final Conclusion:</strong><br> Black soil is highly productive, especially for cotton and dryland crops, due to its excellent moisture retention. However, it requires proper drainage, nutrient management, and climate-adaptive practices for maximum yield.
            </div>
        </section>
        `;
    } else if (soilType === 'red-soil') {
        document.querySelector('.report-grid').innerHTML = `
        <!-- Row 1: Responsive Hero Bento -->
        <section class="report-card hero-img-card" id="sec-hero-img">
            <div class="hero-image-wrap">
                <img id="heroImg" src="${storedImage}" alt="Soil Sample Image">
                <div class="hero-overlay"></div>
                <div class="hero-scan-complete">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C5F255" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Analysis Complete
                </div>
            </div>
        </section>

        <section class="report-card hero-info-card span-3" id="sec-hero-info">
            <p class="hero-eyebrow">🌱 AI RED SOIL REPORT</p>
            <h1>Red Soil – Complete <span>Analysis</span> for Project</h1>
            <p class="hero-sub">Detailed physicochemical diagnostics. Soil condition is currently evaluated as <strong>Moderately Productive</strong>.</p>
            <div class="hero-stats">
                <div class="h-stat"><span class="h-val">5.5–7.5</span><span class="h-label">pH Level</span></div>
                <div class="h-divider"></div>
                <div class="h-stat"><span class="h-val">Sandy Loam</span><span class="h-label">Texture</span></div>
                <div class="h-divider"></div>
                <div class="h-stat"><span class="h-val">65%</span><span class="h-label">Quality Index</span></div>
            </div>
        </section>

        <!-- 1 & 2. pH & Texture Detailed -->
        <section class="report-card span-4" style="background: rgba(255, 255, 255, 0.02); margin-top: 15px;">
            <div style="display:flex; flex-wrap:wrap; gap: 30px;">
                <div style="flex: 1; min-width: 250px;">
                    <h3 style="color:#C5F255; font-size:16px; margin-bottom:8px;">1. pH Level of Red Soil</h3>
                    <p class="hero-sub" style="margin-bottom: 10px; font-size: 14px; width:100%;">Red soil generally has a pH range of 5.5 to 7.5.<br>• Mostly acidic to neutral<br>• In some dry regions, it may become slightly alkaline<br><strong style="color:var(--text-base); margin-top:8px; display:block;">👉 Slight acidity can limit some nutrients but is manageable.</strong></p>
                </div>
                <div style="flex: 1; min-width: 250px;">
                    <h3 style="color:#C5F255; font-size:16px; margin-bottom:8px;">2. Texture of Red Soil</h3>
                    <p class="hero-sub" style="font-size: 14px; width:100%;">Red soil has a light to medium texture:<br>• Sandy to loamy in most areas<br>• Porous and well-drained<br><strong style="color:var(--text-base); margin-top:8px; display:block;">👉 Easy to cultivate but loses nutrients quickly.</strong></p>
                </div>
            </div>
        </section>

        <!-- 3. Detailed Soil Properties -->
        <section class="report-card soil-card span-4" id="sec-soil">
            <div class="card-header-line">
                <div class="card-icon orange"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg></div>
                <h2>3. Detailed Soil Properties & 4. Quality Index</h2>
            </div>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 15px; text-align: left;">
                <div>
                    <h3 style="color:var(--text-base); margin-bottom:8px; font-size:16px;">Physical Properties</h3>
                    <ul style="color:var(--text-gray); font-size:14px; padding-left:20px; line-height:1.6;">
                        <li>Low water retention capacity</li>
                        <li>Good aeration and drainage</li>
                        <li>Light and friable (easy to till)</li>
                        <li>Susceptible to erosion</li>
                    </ul>
                </div>
                <div>
                    <h3 style="color:var(--text-base); margin-bottom:8px; font-size:16px;">Chemical Properties</h3>
                    <ul style="color:var(--text-gray); font-size:14px; padding-left:20px; line-height:1.6;">
                        <li>Rich in iron oxide (gives red color)</li>
                        <li>Poor in nitrogen, phosphorus, and humus</li>
                        <li>Low lime content</li>
                        <li>Deficient in organic matter</li>
                    </ul>
                </div>
                <div>
                    <h3 style="color:var(--text-base); margin-bottom:8px; font-size:16px;">Biological Properties</h3>
                    <ul style="color:var(--text-gray); font-size:14px; padding-left:20px; line-height:1.6;">
                        <li>Low microbial activity due to less organic matter</li>
                        <li>Fertility improves with organic inputs and fertilizers</li>
                    </ul>
                </div>
            </div>
            <div class="tip-box" style="margin-top:15px; background: rgba(197, 242, 85, 0.1); border: 1px solid rgba(197, 242, 85, 0.4); border-left: 4px solid #C5F255;">
                <strong>4. Soil Quality Index (Approximate):</strong> Fertility Index: 55% – 70% | Overall Soil Quality: ~ 60% – 72%<br>
                💡 <strong>👉 Naturally less fertile but can be improved significantly.</strong>
            </div>
        </section>

        <!-- 5. Fertilizer Recommendation -->
        <section class="report-card fertilizer-card span-4" id="sec-fertilizer">
            <div class="card-header-line">
                <div class="card-icon green"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"/><path d="m8 8 4-6 4 6"/><rect x="3" y="14" width="18" height="7" rx="1"/></svg></div>
                <h2>5. Recommended Amendments & Fertilizers</h2>
            </div>
            <div style="margin-bottom: 15px; font-size: 14px; color: var(--text-gray);">
                <strong style="color:var(--text-base);">Soil Amendments:</strong><br>
                • Farmyard manure (FYM) → increases fertility<br>
                • Lime → reduces acidity<br>
                • Green manure crops → improves nitrogen content
            </div>
            <div class="fert-grid">
                <div class="fert-item">
                    <div class="fert-circle n">N</div>
                    <div class="fert-info">
                        <span class="fert-name">Urea</span>
                        <span class="fert-note">Provides nitrogen</span>
                    </div>
                </div>
                <div class="fert-item">
                    <div class="fert-circle p" style="background: rgba(255, 155, 66, 0.2); color: #FF9B42;">DAP</div>
                    <div class="fert-info">
                        <span class="fert-name">Diammonium Phosphate</span>
                        <span class="fert-note">Adds nitrogen + phosphorus</span>
                    </div>
                </div>
                <div class="fert-item">
                    <div class="fert-circle k" style="background: rgba(163, 133, 255, 0.2); color: #A385FF;">NPK</div>
                    <div class="fert-info">
                        <span class="fert-name">NPK Fertilizer (balanced mix)</span>
                        <span class="fert-note">Improves overall fertility</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. Suitable Crops -->
        <section class="report-card growth-card span-4" id="sec-suitable">
            <div class="card-header-line">
                <div class="card-icon blue"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5-5 5-10 5-10S17 2 12 2 7 12 7 12s0 5 5 10z"/></svg></div>
                <h2>6. Top 5 Crops for Red Soil</h2>
            </div>
            <div class="suitable-crops-grid">
                <div class="sc-card">
                    <div class="sc-icon">🥜</div>
                    <div class="sc-name">Groundnut</div>
                    <div class="sc-score">Best suited due to good drainage</div>
                </div>
                <div class="sc-card">
                    <div class="sc-icon">🌾</div>
                    <div class="sc-name">Millets (Ragi, Bajra)</div>
                    <div class="sc-score">Drought-resistant</div>
                </div>
                <div class="sc-card">
                    <div class="sc-icon">☁️</div>
                    <div class="sc-name">Cotton</div>
                    <div class="sc-score">Grows well with proper fertilization</div>
                </div>
                <div class="sc-card">
                    <div class="sc-icon">🌱</div>
                    <div class="sc-name">Pulses (Gram, Tur)</div>
                    <div class="sc-score">Improve soil nitrogen</div>
                </div>
                <div class="sc-card">
                    <div class="sc-icon">🥔</div>
                    <div class="sc-name">Potato</div>
                    <div class="sc-score">Suitable in loamy red soil</div>
                </div>
            </div>
        </section>

        <!-- 7. Climate Conditions -->
        <section class="report-card climate-card span-4" id="sec-climate">
            <div class="card-header-line">
                <div class="card-icon yellow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg></div>
                <h2>7. Climate & Regional Alignment</h2>
            </div>
            <div class="climate-compare" style="max-width: 800px; gap: 40px;">
                <div class="climate-col current">
                    <h3>Ideal Climate for Red Soil</h3>
                    <div class="climate-param"><span>Temperature</span><strong class="good">20°C – 35°C</strong></div>
                    <div class="climate-param"><span>Rainfall</span><strong class="good">50 – 100 cm</strong></div>
                    <div class="climate-param"><span>Location</span><strong class="good">TN, KA, AP, Maharashtra</strong></div>
                </div>
                <div class="climate-divider"></div>
                <div class="climate-col ideal">
                    <h3>Current Scenario (India context)</h3>
                    <div class="climate-param"><span>Rainfall</span><strong class="warn">Irregular & dry spells</strong></div>
                    <div class="climate-param"><span>Erosion</span><strong class="warn">Increasing soil erosion</strong></div>
                    <div class="climate-param"><span>Nutrients</span><strong class="warn">Depleted by continuous farming</strong></div>
                </div>
            </div>
            <div class="climate-alert good-alert">
                🌤️ <strong>Soil–Climate Synergy:</strong> Performs well in dry climates. Needs frequent fertilization and irrigation. Sensitive to heavy rainfall (erosion risk).
            </div>
        </section>

        <!-- 8. AI Recommendations -->
        <section class="report-card ai-card span-4" id="sec-ai">
            <div class="card-header-line">
                <div class="card-icon purple"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2M20 14h2M15 13v2M9 13v2"/></svg></div>
                <h2>8. AI Recommendations Summary 🤖</h2>
            </div>
            <div class="ai-summary-grid">
                <div class="ai-rec info-rec"><div class="ai-rec-icon">🌱</div><div class="ai-rec-content"><p>Apply precision fertilization based on soil testing</p></div></div>
                <div class="ai-rec info-rec"><div class="ai-rec-icon">💧</div><div class="ai-rec-content"><p>Use drip irrigation due to low water retention</p></div></div>
                <div class="ai-rec positive-rec"><div class="ai-rec-icon">🌿</div><div class="ai-rec-content"><p>Add organic compost regularly to improve fertility</p></div></div>
                <div class="ai-rec info-rec"><div class="ai-rec-icon">🔁</div><div class="ai-rec-content"><p>Practice crop rotation (millets + pulses)</p></div></div>
                <div class="ai-rec urgent-rec"><div class="ai-rec-icon">🛡️</div><div class="ai-rec-content"><p>Use mulching to prevent moisture loss and erosion</p></div></div>
                <div class="ai-rec info-rec"><div class="ai-rec-icon">📊</div><div class="ai-rec-content"><p>Use AI-based monitoring tools for nutrient tracking</p></div></div>
            </div>
            <div class="tip-box" style="margin-top: 20px; text-align: left; background: rgba(197, 242, 85, 0.1); border-left: 4px solid #C5F255; padding: 15px;">
                <strong>✅ Final Conclusion:</strong><br> Red soil is less fertile naturally but highly responsive to fertilizers and organic matter. With proper management, it can support a wide range of crops, especially in dry and semi-arid regions.
            </div>
        </section>
        `;
    } else { // alluvial-soil
        document.querySelector('.report-grid').innerHTML = `
        <!-- Row 1: Responsive Hero Bento -->
        <section class="report-card hero-img-card" id="sec-hero-img">
            <div class="hero-image-wrap">
                <img id="heroImg" src="${storedImage}" alt="Soil Sample Image">
                <div class="hero-overlay"></div>
                <div class="hero-scan-complete">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C5F255" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Analysis Complete
                </div>
            </div>
        </section>

        <section class="report-card hero-info-card span-3" id="sec-hero-info">
            <p class="hero-eyebrow">🌱 AI ALLUVIAL SOIL REPORT</p>
            <h1>Alluvial Soil – Complete <span>Analysis</span> for Project</h1>
            <p class="hero-sub">Detailed physicochemical diagnostics. Soil condition is currently evaluated as <strong>Highly Productive</strong>.</p>
            <div class="hero-stats">
                <div class="h-stat"><span class="h-val">6.5–7.5</span><span class="h-label">pH Level</span></div>
                <div class="h-divider"></div>
                <div class="h-stat"><span class="h-val">Loamy</span><span class="h-label">Texture</span></div>
                <div class="h-divider"></div>
                <div class="h-stat"><span class="h-val">85%</span><span class="h-label">Quality Index</span></div>
            </div>
        </section>

        <!-- 1 & 2. pH & Texture Detailed -->
        <section class="report-card span-4" style="background: rgba(255, 255, 255, 0.02); margin-top: 15px;">
            <div style="display:flex; flex-wrap:wrap; gap: 30px;">
                <div style="flex: 1; min-width: 250px;">
                    <h3 style="color:#C5F255; font-size:16px; margin-bottom:8px;">1. pH Level of Alluvial Soil</h3>
                    <p class="hero-sub" style="margin-bottom: 10px; font-size: 14px; width:100%;">Alluvial soil generally has a pH range of 6.0 to 8.5. In most regions, it is slightly acidic to neutral (6.5–7.5). In drier areas, it can become slightly alkaline (up to 8.5).<br><strong style="color:var(--text-base); margin-top:8px; display:block;">👉 This wide pH range makes it suitable for a variety of crops.</strong></p>
                </div>
                <div style="flex: 1; min-width: 250px;">
                    <h3 style="color:#C5F255; font-size:16px; margin-bottom:8px;">2. Texture of Alluvial Soil</h3>
                    <p class="hero-sub" style="font-size: 14px; width:100%;">Variable texture depending on river deposition:<br>• Sandy (coarse) – near river banks<br>• Loamy (ideal mix) – most fertile type<br>• Clayey (fine) – in low-lying areas<br><strong style="color:var(--text-base); margin-top:8px; display:block;">👉 Best agricultural form: Loamy texture (sand + silt + clay balance)</strong></p>
                </div>
            </div>
        </section>

        <!-- 3. Detailed Soil Properties -->
        <section class="report-card soil-card span-4" id="sec-soil">
            <div class="card-header-line">
                <div class="card-icon orange"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg></div>
                <h2>3. Detailed Soil Properties & 4. Quality Index</h2>
            </div>
            
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 15px; text-align: left;">
                <div>
                    <h3 style="color:var(--text-base); margin-bottom:8px; font-size:16px;">Physical Properties</h3>
                    <ul style="color:var(--text-gray); font-size:14px; padding-left:20px; line-height:1.6;">
                        <li>Good water retention capacity</li>
                        <li>Moderate to good drainage</li>
                        <li>Easily workable (friable nature)</li>
                        <li>Light to medium bulk density</li>
                    </ul>
                </div>
                <div>
                    <h3 style="color:var(--text-base); margin-bottom:8px; font-size:16px;">Chemical Properties</h3>
                    <ul style="color:var(--text-gray); font-size:14px; padding-left:20px; line-height:1.6;">
                        <li>Rich in potash and lime</li>
                        <li>Moderate in phosphorus</li>
                        <li>Deficient in nitrogen and organic matter</li>
                        <li>Contains micronutrients like iron and zinc</li>
                    </ul>
                </div>
                <div>
                    <h3 style="color:var(--text-base); margin-bottom:8px; font-size:16px;">Biological Properties</h3>
                    <ul style="color:var(--text-gray); font-size:14px; padding-left:20px; line-height:1.6;">
                        <li>Supports microbial activity when organic matter is added</li>
                        <li>Fertility improves with crop rotation and compost</li>
                    </ul>
                </div>
            </div>
            <div class="tip-box" style="margin-top:15px; background: rgba(197, 242, 85, 0.1); border: 1px solid rgba(197, 242, 85, 0.4); border-left: 4px solid #C5F255;">
                <strong>4. Soil Quality Index (Approximate):</strong> Fertility Index: 75% – 90% | Overall Soil Quality: ~ 80% – 88%<br>
                💡 <strong>👉 High productivity but depends on nutrient management.</strong>
            </div>
        </section>

        <!-- 5. Fertilizer Recommendation -->
        <section class="report-card fertilizer-card span-4" id="sec-fertilizer">
            <div class="card-header-line">
                <div class="card-icon green"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"/><path d="m8 8 4-6 4 6"/><rect x="3" y="14" width="18" height="7" rx="1"/></svg></div>
                <h2>5. Recommended Amendments & Fertilizers</h2>
            </div>
            
            <div style="margin-bottom: 15px; font-size: 14px; color: var(--text-gray);">
                <strong style="color:var(--text-base);">Soil Amendments:</strong><br>
                • Organic compost / farmyard manure (FYM) → improves structure<br>
                • Green manure (e.g., dhaincha) → increases nitrogen<br>
                • Biofertilizers → enhances microbial activity
            </div>
            
            <div class="fert-grid">
                <div class="fert-item">
                    <div class="fert-circle n">N</div>
                    <div class="fert-info">
                        <span class="fert-name">Urea (Nitrogen source)</span>
                        <span class="fert-note">For vegetative growth</span>
                    </div>
                </div>
                <div class="fert-item">
                    <div class="fert-circle p" style="background: rgba(255, 155, 66, 0.2); color: #FF9B42;">DAP</div>
                    <div class="fert-info">
                        <span class="fert-name">Diammonium Phosphate</span>
                        <span class="fert-note">Provides nitrogen + phosphorus</span>
                    </div>
                </div>
                <div class="fert-item">
                    <div class="fert-circle k" style="background: rgba(163, 133, 255, 0.2); color: #A385FF;">MOP</div>
                    <div class="fert-info">
                        <span class="fert-name">Muriate of Potash</span>
                        <span class="fert-note">Improves root and crop strength</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. Suitable Crops -->
        <section class="report-card growth-card span-4" id="sec-suitable">
            <div class="card-header-line">
                <div class="card-icon blue"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5-5 5-10 5-10S17 2 12 2 7 12 7 12s0 5 5 10z"/></svg></div>
                <h2>6. Top 5 Crops for Alluvial Soil</h2>
            </div>
            <div class="suitable-crops-grid">
                <div class="sc-card">
                    <div class="sc-icon">🌾</div>
                    <div class="sc-name">Wheat</div>
                    <div class="sc-score">Thrives in well-drained loamy soil</div>
                </div>
                <div class="sc-card">
                    <div class="sc-icon">🌾</div>
                    <div class="sc-name">Rice</div>
                    <div class="sc-score">Suitable in clayey alluvial regions</div>
                </div>
                <div class="sc-card">
                    <div class="sc-icon">🎋</div>
                    <div class="sc-name">Sugarcane</div>
                    <div class="sc-score">Needs fertile, moisture-retentive soil</div>
                </div>
                <div class="sc-card">
                    <div class="sc-icon">☁️</div>
                    <div class="sc-name">Cotton</div>
                    <div class="sc-score">Grows well in slightly alkaline soil</div>
                </div>
                <div class="sc-card">
                    <div class="sc-icon">🌽</div>
                    <div class="sc-name">Maize</div>
                    <div class="sc-score">Prefers well-aerated alluvial soil</div>
                </div>
            </div>
        </section>

        <!-- 7. Climate Conditions -->
        <section class="report-card climate-card span-4" id="sec-climate">
            <div class="card-header-line">
                <div class="card-icon yellow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg></div>
                <h2>7. Climate & Regional Alignment</h2>
            </div>
            <div class="climate-compare" style="max-width: 800px; gap: 40px;">
                <div class="climate-col current">
                    <h3>Ideal Climate for Alluvial Soil</h3>
                    <div class="climate-param"><span>Temperature</span><strong class="good">20°C – 35°C </strong></div>
                    <div class="climate-param"><span>Rainfall</span><strong class="good">75 – 150 cm</strong></div>
                    <div class="climate-param"><span>Location</span><strong class="good">River plains (e.g., Indo-Gangetic)</strong></div>
                </div>
                <div class="climate-divider"></div>
                <div class="climate-col ideal">
                    <h3>Current Scenario (India context)</h3>
                    <div class="climate-param"><span>Temperature</span><strong class="warn">Increasing variability</strong></div>
                    <div class="climate-param"><span>Monsoon</span><strong class="warn">Irregular patterns</strong></div>
                    <div class="climate-param"><span>Nutrients</span><strong class="warn">Depleted by over-farming</strong></div>
                </div>
            </div>
            <div class="climate-alert good-alert">
                🌤️ <strong>Soil–Climate Synergy:</strong> Still highly productive due to adaptability. Requires efficient irrigation and nutrient management. Climate stress can reduce yield without proper care.
            </div>
        </section>


        <!-- 8. AI Recommendations -->
        <section class="report-card ai-card span-4" id="sec-ai">
            <div class="card-header-line">
                <div class="card-icon purple"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2M20 14h2M15 13v2M9 13v2"/></svg></div>
                <h2>8. AI Recommendations Summary 🤖</h2>
            </div>
            <p style="color:var(--text-gray); font-size:14px; margin-bottom:15px;">Based on soil data and modern agricultural practices:</p>
            <div class="ai-summary-grid">
                <div class="ai-rec info-rec"><div class="ai-rec-icon">🌱</div><div class="ai-rec-content"><p>Use precision farming (soil testing + targeted fertilizer use)</p></div></div>
                <div class="ai-rec info-rec"><div class="ai-rec-icon">💧</div><div class="ai-rec-content"><p>Adopt drip irrigation to maintain moisture balance</p></div></div>
                <div class="ai-rec info-rec"><div class="ai-rec-icon">🔁</div><div class="ai-rec-content"><p>Practice crop rotation (e.g., wheat + pulses) to improve nitrogen</p></div></div>
                <div class="ai-rec positive-rec"><div class="ai-rec-icon">🌿</div><div class="ai-rec-content"><p>Increase organic matter to enhance fertility and microbial health</p></div></div>
                <div class="ai-rec info-rec"><div class="ai-rec-icon">📊</div><div class="ai-rec-content"><p>Use AI-based soil monitoring apps/sensors for real-time tracking</p></div></div>
                <div class="ai-rec urgent-rec"><div class="ai-rec-icon">⚠️</div><div class="ai-rec-content"><p>Avoid overuse of chemical fertilizers to prevent soil degradation</p></div></div>
            </div>
            <div class="tip-box" style="margin-top: 20px; text-align: left; background: rgba(197, 242, 85, 0.1); border-left: 4px solid #C5F255; padding: 15px;">
                <strong>✅ Final Conclusion:</strong><br> Alluvial soil is one of the most fertile and versatile soils, supporting diverse crops. However, maintaining its productivity requires balanced fertilization, organic inputs, and climate-smart practices.
            </div>
        </section>
        `;
    }

    const gaugeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target.querySelector('.gauge-progress');
                if (fill) {
                    // full arc = 141, 90% is offset 14 (141 * (1 - 0.9)) -> actually let's re-animate
                    fill.style.strokeDashoffset = '141';
                    setTimeout(() => {
                        fill.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(0.22, 1, 0.36, 1)';
                        fill.style.strokeDashoffset = '14'; // 90%
                    }, 100);
                }
                gaugeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    document.querySelectorAll('.gauge-wrap').forEach(el => gaugeObserver.observe(el));


    // ── Animate Suitable Crop Bars on scroll ────────────────────────────────────
    const scObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.sc-bar-fill').forEach(bar => {
                    const targetWidth = bar.getAttribute('data-width');
                    bar.style.width = '0%';
                    setTimeout(() => { 
                        bar.style.width = targetWidth; 
                    }, 100);
                });
                scObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.suitable-crops-grid').forEach(el => scObserver.observe(el));

    // ── Animate fertilizer bars ───────────────────────────────────
    const fertObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.fert-bar-fill').forEach(bar => {
                    const w = bar.style.width;
                    bar.style.transition = 'none';
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.transition = 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
                        bar.style.width = w;
                    }, 100);
                });
                fertObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.fertilizer-card').forEach(el => fertObserver.observe(el));

});
