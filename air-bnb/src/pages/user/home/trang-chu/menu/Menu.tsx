import React, { useEffect, useState } from 'react'
import './Menu.css'

export default function Menu() {
    return (
        <div id='menu-slide' className='container my-5'>

            <div className='relative d-flex'>
                <button className="btn-menu-long absolute left-0 top-5 arrow left" style={{ fontWeight: '500' }}><i className="fa-solid fa-arrow-left"></i></button>
                <div className="menu-list menu c14whb16 atm_8w_je46wd atm_90_wqqh0j atm_93_16tozh0 atm_9s_11p5wf0 atm_d5_1bp4okc atm_d3_8n3s54 atm_cx_dfedth atm_e0_1fe5oxz atm_dy_kim48s atm_fc_1y6m0gg atm_gi_idpfg4 atm_j6_mtsehg atm_e2_1kjme8w atm_ks_ndwtr5 atm_l4_1f51e7f atm_ld_5ul63a atm_lc_djs5a5 atm_lj_wg387a atm_li_1y0adu4 atm_o3_1p5gfer atm_p9_glywfm atm_tl_19lnvtn atm_or_dhnz5w__ta18iu atm_9s_glywfm_14pyf7n atm_oa_2geptf_bqoj1z atm_oq_1vwytc5_bqoj1z dir dir-ltr">
                    <label
                        aria-hidden="false"
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_3f_n7od8j atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c39h6gc atm_7l_1cpjb8p atm_2d_n7od8j atm_9j_73adwj atm_k4_kb7nvz_1niziu1 atm_k4_kb7nvz_1bya6vc atm_2d_1cpjb8p_1bya6vc atm_2d_1cpjb8p_1ax83uz_uv4tnr dir dir-ltr"
                    >
                        <input
                            type="radio"
                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"

                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Biểu tượng--checked"
                        >
                            <span className="c1ozl2w2 atm_ar_1bp4okc atm_h_1h6ojuz atm_cx_evh4rp atm_cx_1yuitx__oggzyc c1brta2w atm_9s_11p5wf0 atm_dz_5bpdsk atm_e0_1d08cwl atm_dy_jq7gjm atm_jb_1gam6f0 dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Biểu tượng
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="false"
                        className="c1rmt9x7 atm_9s_1o8liyq atm_9j_tlke0l atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx dir dir-ltr"
                    >
                        <input
                            type="radio"
                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Hồ bơi tuyệt vời--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Hồ bơi tuyệt vời
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="false"
                        className="c1rmt9x7 atm_9s_1o8liyq atm_9j_tlke0l atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx dir dir-ltr"
                    >
                        <input
                            type="radio"
                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Phòng--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Phòng
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="false"
                        className="c1rmt9x7 atm_9s_1o8liyq atm_9j_tlke0l atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx dir dir-ltr"
                    >
                        <input
                            type="radio"
                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Khung cảnh tuyệt vời--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Khung cảnh
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="false"
                        className="c1rmt9x7 atm_9s_1o8liyq atm_9j_tlke0l atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx dir dir-ltr"
                    >
                        <input
                            type="radio"
                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Nông trại--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Nông trại
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="false"
                        className="c1rmt9x7 atm_9s_1o8liyq atm_9j_tlke0l atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx dir dir-ltr"
                    >
                        <input
                            type="radio"
                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Bắc Cực--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Bắc Cực
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="false"
                        className="c1rmt9x7 atm_9s_1o8liyq atm_9j_tlke0l atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx dir dir-ltr"
                    >
                        <input
                            type="radio"
                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Cabin--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Cabin
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="false"
                        className="c1rmt9x7 atm_9s_1o8liyq atm_9j_tlke0l atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx dir dir-ltr"
                    >
                        <input
                            type="radio"
                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Biệt thự--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Biệt thự
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="false"
                        className="c1rmt9x7 atm_9s_1o8liyq atm_9j_tlke0l atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx dir dir-ltr"
                    >
                        <input
                            type="radio"
                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Thật ấn tượng!--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Thật ấn tượng!
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="false"
                        className="c1rmt9x7 atm_9s_1o8liyq atm_9j_tlke0l atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx dir dir-ltr"
                    >
                        <input
                            type="radio"
                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Được ưa chuộng--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Được ưa chuộng
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="false"
                        className="c1rmt9x7 atm_9s_1o8liyq atm_9j_tlke0l atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx dir dir-ltr"
                    >
                        <input
                            type="radio"
                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Nhà phong cách Cycladic--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Nhà phong cách
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Hướng biển--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Hướng biển
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Thuyền--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Thuyền
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Nhà trên cây--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Nhà trên cây
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Thành phố hàng đầu--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Thành phố hàng đầu
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Công viên quốc gia--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Công viên quốc gia
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Nhà nông trại--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Nhà nông trại
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Nông thôn--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Nông thôn
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Container--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Container
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Vườn nho--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Vườn nho
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Ven hồ--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Ven hồ
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Chơi golf--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Chơi golf
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Nhà khung chữ A--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Nhà khung chữ A
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Phục vụ bữa sáng--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Phục vụ bữa sáng
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Nhà nhỏ--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Nhà nhỏ
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Hanok--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Hanok
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Đường trượt tuyết thẳng tới chỗ ở--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Trượt tuyết
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Đảo--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Đảo
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Bếp của bếp trưởng--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Bếp của bếp trưởng
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Lâu đài--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Lâu đài
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Thiết kế--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Thiết kế
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Nhà trên núi--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Nhà trên núi
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Cối xay gió--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Cối xay gió
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Vui chơi--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Vui chơi
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Nhiệt đới--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Nhiệt đới
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Hồ--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Hồ
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Khu cắm trại--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Khu cắm trại
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Xe cắm trại--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Xe cắm trại
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Hang động--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Hang động
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Lướt sóng--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Lướt sóng
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Mới--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Mới
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Nhà dưới lòng đất--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Nhà dưới lòng đất
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Luxe--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Luxe
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Nhà mang tính lịch sử--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Mang tính lịch sử
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Trượt tuyết--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Trượt tuyết
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Nhà mái vòm--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Nhà mái vòm
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Ryokan--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Ryokan
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Lều mục đồng--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Lều mục đồng
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Casa Particular--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Casa Particular
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Minsu--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Minsu
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Grand piano--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Grand piano
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Sa mạc--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Sa mạc
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Tháp--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Tháp
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Lều yurt--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Lều yurt
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Nhà thuyền--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Nhà thuyền
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Hỗ trợ người dùng xe lăn--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Hỗ trợ xe lăn
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Nhà không sử dụng điện lưới--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        No điện lưới
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Không gian sáng tạo--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Không gian sáng tạo
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Riad--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Riad
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Dammuso--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Dammuso
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Nhà chỏm nón--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Nhà chỏm nón
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>
                    <label
                        aria-hidden="true"
                        tabIndex={-1}
                        className="c1rmt9x7 atm_9s_1o8liyq atm_r3_1h6ojuz atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_5j_t09oo2 atm_2d_n7od8j atm_3f_n7od8j atm_7l_1esdqks atm_cs_9dzvea atm_l8_19rj6ls atm_gi_1edegy6 atm_uc_rxcoh6 atm_vy_1risgsc atm_r2_1j28jx2 atm_mk_48005v atm_kd_glywfm atm_tl_1gw4zv3 atm_keyhrx_h2mmj6_1057f96 atm_jet0t3_1ulexfb_1057f96 atm_92_1yyfdc7_vmtskl atm_9s_1hp8fob_vmtskl atm_mk_stnw88_vmtskl atm_fq_myb0kj_vmtskl atm_n3_myb0kj_vmtskl atm_tk_myb0kj_vmtskl atm_6i_myb0kj_vmtskl atm_5j_t09oo2_vmtskl atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_7l_1cpjb8p_1s76pf2 atm_uc_aaiy6o_1gu5iaz atm_70_lgq2mu_1gu5iaz atm_uc_glywfm_1gu5iaz_1rrf6b5 atm_k4_kb7nvz_16cw4h3 atm_7l_1cpjb8p_1y5fnfe_1oszvuo atm_uc_aaiy6o_74pfbf_1oszvuo atm_70_lgq2mu_74pfbf_1oszvuo atm_uc_glywfm_74pfbf_1o31aam atm_k4_kb7nvz_zwsw8e_1oszvuo atm_7l_1cpjb8p_1nos8r_uv4tnr atm_k4_kb7nvz_1fb21cw_uv4tnr atm_k4_kb7nvz_1ax83uz_uv4tnr atm_2d_1oqmvsg_1ax83uz_uv4tnr atm_tr_18md41p_15yiuox atm_tr_19fcgr5_fayvjx c3nt6z6 atm_9j_13gfvf7 dir dir-ltr"
                    >
                        <input
                            type="radio"

                            name="categoryScroller"
                            className="h192l0gc atm_3f_idpfg4 atm_7h_hxbz6r atm_7i_ysn8ba atm_e2_t94yts atm_ks_zryt35 atm_l8_idpfg4 atm_mk_stnw88 atm_vv_1q9ccgz atm_vy_t94yts dir dir-ltr"
                        />
                        <div
                            className="c1abgzgs atm_9s_1txwivl atm_ar_vrvcex dir dir-ltr"
                            data-testid="category-item--Bãi biển--unchecked"
                        >
                            <span className="c1ozl2w2 atm_9s_1txwivl atm_ar_1bp4okc atm_h_1h6ojuz atm_jb_1sx8fo5 atm_cx_evh4rp atm_cx_1yuitx__oggzyc dir dir-ltr">
                                <img
                                    className="i181yxiv atm_j3_1osqo2v atm_vy_1o8jidz atm_e2_1wugsn5 atm_d2_2ec48i atm_fg_1h6ojuz atm_k4_1d1puqj atm_uc_15ib22x atm_ui_idpfg4__1rrf6b5 dir dir-ltr"
                                    src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                                <div className="t192ua0c atm_d2_1cy2u2k atm_fg_1h6ojuz atm_vv_1q9ccgz atm_mk_h2mmj6 atm_mk_stnw88_9in345 atm_92_1yyfdc7_9in345 atm_f7_idpfg4_9in345 atm_e2_yh40bf_9in345 atm_tk_1yzjdlj_9in345 atm_k4_idpfg4_9in345 atm_uc_1wre3yg_9in345 atm_uc_glywfm_9in345_1rrf6b5 dir dir-ltr">
                                    <span className="ti7yjx atm_ve_glywfm atm_vb_glywfm atm_9s_1o8liyq atm_uc_1bfgeka dir dir-ltr">
                                        Bãi biển
                                    </span>
                                </div>
                            </span>
                        </div>
                    </label>


                </div>
                <button className="btn-menu-long absolute right-0 top-5 arrow right" style={{ fontWeight: '500' }}><i className="fa-solid fa-arrow-right"></i></button>
            </div>

            <div id='khamPha-menu' className="rounded mt-5 p-1 flex flex-wrap justify-center gap-3">
                <button style={{ fontWeight: '500', fontSize: 'small' }} className="rounded-lg text-sm bg-white text-black border border-gray-300 hover:border-gray-900 duration-300 px-6 py-2">
                    Loại nơi ở
                </button>
                <button style={{ fontWeight: '500', fontSize: 'small' }} className="rounded-lg text-sm bg-white text-black border border-gray-300 hover:border-gray-900 duration-300 px-6 py-2">
                    Giá
                </button>
                <button style={{ fontWeight: '500', fontSize: 'small' }} className="rounded-lg text-sm bg-white text-black border border-gray-300 hover:border-gray-900 duration-300 px-6 py-2">
                    Đặt ngay
                </button>
                <button style={{ fontWeight: '500', fontSize: 'small' }} className="rounded-lg text-sm bg-white text-black border border-gray-300 hover:border-gray-900 duration-300 px-6 py-2">
                    Phòng và phòng ngủ
                </button>
            </div>
        </div>
    )
}
