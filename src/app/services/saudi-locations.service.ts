import { Injectable } from '@angular/core';

export interface SaudiCity {
  key: string;
  en: string;
  ar: string;
  districts: SaudiDistrict[];
}

export interface SaudiDistrict {
  key: string;
  en: string;
  ar: string;
}

@Injectable({
  providedIn: 'root'
})
export class SaudiLocationsService {

  // Complete list of Saudi Arabia cities with their districts
  private cities: SaudiCity[] = [
    // Riyadh Region
    {
      key: 'riyadh',
      en: 'Riyadh',
      ar: 'الرياض',
      districts: [
        { key: 'al_olaya', en: 'Al Olaya', ar: 'العليا' },
        { key: 'al_malaz', en: 'Al Malaz', ar: 'الملز' },
        { key: 'al_murabba', en: 'Al Murabba', ar: 'المربع' },
        { key: 'al_naseem', en: 'Al Naseem', ar: 'النسيم' },
        { key: 'al_rawdah', en: 'Al Rawdah', ar: 'الروضة' },
        { key: 'al_shifa', en: 'Al Shifa', ar: 'الشفاء' },
        { key: 'al_sulay', en: 'Al Sulay', ar: 'السلي' },
        { key: 'al_wurud', en: 'Al Wurud', ar: 'الورود' },
        { key: 'al_zahrah', en: 'Al Zahrah', ar: 'الزهراء' },
        { key: 'al_rabwah', en: 'Al Rabwah', ar: 'الربوة' },
        { key: 'al_sahafah', en: 'Al Sahafah', ar: 'الصحافة' },
        { key: 'al_nakheel', en: 'Al Nakheel', ar: 'النخيل' },
        { key: 'al_yasmeen', en: 'Al Yasmeen', ar: 'الياسمين' },
        { key: 'al_narjis', en: 'Al Narjis', ar: 'النرجس' },
        { key: 'al_aqiq', en: 'Al Aqiq', ar: 'العقيق' },
        { key: 'al_ghadir', en: 'Al Ghadir', ar: 'الغدير' },
        { key: 'hittin', en: 'Hittin', ar: 'حطين' },
        { key: 'al_muhammadiyah', en: 'Al Muhammadiyah', ar: 'المحمدية' },
        { key: 'al_khaleej', en: 'Al Khaleej', ar: 'الخليج' },
        { key: 'al_izdihar', en: 'Al Izdihar', ar: 'الازدهار' },
        { key: 'al_wadi', en: 'Al Wadi', ar: 'الوادي' },
        { key: 'al_hamra', en: 'Al Hamra', ar: 'الحمراء' },
        { key: 'al_mursalat', en: 'Al Mursalat', ar: 'المرسلات' },
        { key: 'al_falah', en: 'Al Falah', ar: 'الفلاح' },
        { key: 'al_badiah', en: 'Al Badiah', ar: 'البديعة' },
        { key: 'al_shimaisi', en: 'Al Shimaisi', ar: 'الشميسي' },
        { key: 'other_riyadh', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Jeddah
    {
      key: 'jeddah',
      en: 'Jeddah',
      ar: 'جدة',
      districts: [
        { key: 'al_balad', en: 'Al Balad', ar: 'البلد' },
        { key: 'al_hamra_jed', en: 'Al Hamra', ar: 'الحمراء' },
        { key: 'al_rawdah_jed', en: 'Al Rawdah', ar: 'الروضة' },
        { key: 'al_salama', en: 'Al Salama', ar: 'السلامة' },
        { key: 'al_naeem', en: 'Al Naeem', ar: 'النعيم' },
        { key: 'al_marwah', en: 'Al Marwah', ar: 'المروة' },
        { key: 'al_safa', en: 'Al Safa', ar: 'الصفا' },
        { key: 'al_faisaliyah', en: 'Al Faisaliyah', ar: 'الفيصلية' },
        { key: 'al_sharafiyah', en: 'Al Sharafiyah', ar: 'الشرفية' },
        { key: 'al_zahra', en: 'Al Zahra', ar: 'الزهراء' },
        { key: 'al_rehab', en: 'Al Rehab', ar: 'الرحاب' },
        { key: 'al_ruwais', en: 'Al Ruwais', ar: 'الرويس' },
        { key: 'al_andalus', en: 'Al Andalus', ar: 'الأندلس' },
        { key: 'al_shati', en: 'Al Shati', ar: 'الشاطئ' },
        { key: 'al_kornish', en: 'Al Kornish', ar: 'الكورنيش' },
        { key: 'al_bawadi', en: 'Al Bawadi', ar: 'البوادي' },
        { key: 'bryman', en: 'Bryman', ar: 'بريمان' },
        { key: 'al_khalidiyah', en: 'Al Khalidiyah', ar: 'الخالدية' },
        { key: 'al_basatin', en: 'Al Basatin', ar: 'البساتين' },
        { key: 'other_jeddah', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Makkah
    {
      key: 'makkah',
      en: 'Makkah',
      ar: 'مكة المكرمة',
      districts: [
        { key: 'al_haram', en: 'Al Haram', ar: 'الحرم' },
        { key: 'al_aziziyah', en: 'Al Aziziyah', ar: 'العزيزية' },
        { key: 'al_awali', en: 'Al Awali', ar: 'العوالي' },
        { key: 'al_shisha', en: 'Al Shisha', ar: 'الششة' },
        { key: 'al_rusayfah', en: 'Al Rusayfah', ar: 'الرصيفة' },
        { key: 'al_misfalah', en: 'Al Misfalah', ar: 'المسفلة' },
        { key: 'al_kakiyah', en: 'Al Kakiyah', ar: 'الكاكية' },
        { key: 'al_nuzha', en: 'Al Nuzha', ar: 'النزهة' },
        { key: 'al_shoqiyah', en: 'Al Shoqiyah', ar: 'الشوقية' },
        { key: 'al_zahra_mak', en: 'Al Zahra', ar: 'الزاهر' },
        { key: 'jabal_al_nour', en: 'Jabal Al Nour', ar: 'جبل النور' },
        { key: 'al_taniem', en: 'Al Taniem', ar: 'التنعيم' },
        { key: 'other_makkah', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Madinah
    {
      key: 'madinah',
      en: 'Madinah',
      ar: 'المدينة المنورة',
      districts: [
        { key: 'al_haram_mad', en: 'Al Haram', ar: 'الحرم' },
        { key: 'quba', en: 'Quba', ar: 'قباء' },
        { key: 'al_awali_mad', en: 'Al Awali', ar: 'العوالي' },
        { key: 'al_azhari', en: 'Al Azhari', ar: 'الأزهري' },
        { key: 'bani_harithah', en: 'Bani Harithah', ar: 'بني حارثة' },
        { key: 'al_jumuah', en: 'Al Jumuah', ar: 'الجمعة' },
        { key: 'al_khaldiyah', en: 'Al Khaldiyah', ar: 'الخالدية' },
        { key: 'al_shohada', en: 'Al Shohada', ar: 'الشهداء' },
        { key: 'al_qiblatayn', en: 'Al Qiblatayn', ar: 'القبلتين' },
        { key: 'uhud', en: 'Uhud', ar: 'أحد' },
        { key: 'al_salam', en: 'Al Salam', ar: 'السلام' },
        { key: 'other_madinah', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Dammam
    {
      key: 'dammam',
      en: 'Dammam',
      ar: 'الدمام',
      districts: [
        { key: 'al_faisaliyah_dam', en: 'Al Faisaliyah', ar: 'الفيصلية' },
        { key: 'al_shati_dam', en: 'Al Shati', ar: 'الشاطئ' },
        { key: 'al_rawdah_dam', en: 'Al Rawdah', ar: 'الروضة' },
        { key: 'al_anoud', en: 'Al Anoud', ar: 'العنود' },
        { key: 'al_jalawiyah', en: 'Al Jalawiyah', ar: 'الجلوية' },
        { key: 'al_mazruiyah', en: 'Al Mazruiyah', ar: 'المزروعية' },
        { key: 'al_muraikabat', en: 'Al Muraikabat', ar: 'المريكبات' },
        { key: 'al_nada', en: 'Al Nada', ar: 'الندى' },
        { key: 'al_rakah', en: 'Al Rakah', ar: 'الراكة' },
        { key: 'al_qazaz', en: 'Al Qazaz', ar: 'القزاز' },
        { key: 'other_dammam', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Khobar
    {
      key: 'khobar',
      en: 'Al Khobar',
      ar: 'الخبر',
      districts: [
        { key: 'al_thuqbah', en: 'Al Thuqbah', ar: 'الثقبة' },
        { key: 'al_khobar_north', en: 'Al Khobar North', ar: 'الخبر الشمالية' },
        { key: 'al_khobar_south', en: 'Al Khobar South', ar: 'الخبر الجنوبية' },
        { key: 'al_aqrabiyah', en: 'Al Aqrabiyah', ar: 'العقربية' },
        { key: 'al_bandariyah', en: 'Al Bandariyah', ar: 'البندرية' },
        { key: 'al_rawabi', en: 'Al Rawabi', ar: 'الروابي' },
        { key: 'al_ulaya_khob', en: 'Al Ulaya', ar: 'العليا' },
        { key: 'al_yarmouk_khob', en: 'Al Yarmouk', ar: 'اليرموك' },
        { key: 'al_hizam_akhdar', en: 'Al Hizam Al Akhdar', ar: 'الحزام الأخضر' },
        { key: 'other_khobar', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Dhahran
    {
      key: 'dhahran',
      en: 'Dhahran',
      ar: 'الظهران',
      districts: [
        { key: 'dhahran_camp', en: 'Dhahran Camp', ar: 'معسكر الظهران' },
        { key: 'al_doha', en: 'Al Doha', ar: 'الدوحة' },
        { key: 'kfupm', en: 'KFUPM Area', ar: 'منطقة جامعة البترول' },
        { key: 'other_dhahran', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Abha
    {
      key: 'abha',
      en: 'Abha',
      ar: 'أبها',
      districts: [
        { key: 'al_mansak', en: 'Al Mansak', ar: 'المنسك' },
        { key: 'al_qabil', en: 'Al Qabil', ar: 'القابل' },
        { key: 'al_mahalah', en: 'Al Mahalah', ar: 'المحالة' },
        { key: 'al_wardatain', en: 'Al Wardatain', ar: 'الوردتين' },
        { key: 'al_dabab', en: 'Al Dabab', ar: 'الضباب' },
        { key: 'al_sadd', en: 'Al Sadd', ar: 'السد' },
        { key: 'other_abha', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Taif
    {
      key: 'taif',
      en: 'Taif',
      ar: 'الطائف',
      districts: [
        { key: 'al_hada', en: 'Al Hada', ar: 'الهدا' },
        { key: 'al_shifa_taif', en: 'Al Shifa', ar: 'الشفا' },
        { key: 'al_hawiyah', en: 'Al Hawiyah', ar: 'الحوية' },
        { key: 'al_faisaliyah_taif', en: 'Al Faisaliyah', ar: 'الفيصلية' },
        { key: 'al_qutbiyah', en: 'Al Qutbiyah', ar: 'القطبية' },
        { key: 'al_rehab_taif', en: 'Al Rehab', ar: 'الرحاب' },
        { key: 'al_salam_taif', en: 'Al Salam', ar: 'السلام' },
        { key: 'al_mathnah', en: 'Al Mathnah', ar: 'المثناة' },
        { key: 'shihar', en: 'Shihar', ar: 'شهار' },
        { key: 'other_taif', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Tabuk
    {
      key: 'tabuk',
      en: 'Tabuk',
      ar: 'تبوك',
      districts: [
        { key: 'al_faisaliyah_tab', en: 'Al Faisaliyah', ar: 'الفيصلية' },
        { key: 'al_rawdah_tab', en: 'Al Rawdah', ar: 'الروضة' },
        { key: 'al_sulaymaniyah_tab', en: 'Al Sulaymaniyah', ar: 'السليمانية' },
        { key: 'al_muruj', en: 'Al Muruj', ar: 'المروج' },
        { key: 'al_akhdar', en: 'Al Akhdar', ar: 'الأخضر' },
        { key: 'al_masif', en: 'Al Masif', ar: 'المصيف' },
        { key: 'other_tabuk', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Hail
    {
      key: 'hail',
      en: 'Hail',
      ar: 'حائل',
      districts: [
        { key: 'al_aziziyah_hail', en: 'Al Aziziyah', ar: 'العزيزية' },
        { key: 'al_khuzama', en: 'Al Khuzama', ar: 'الخزامى' },
        { key: 'al_muntazah_hail', en: 'Al Muntazah', ar: 'المنتزه' },
        { key: 'al_mughaisilah', en: 'Al Mughaisilah', ar: 'المغيسلة' },
        { key: 'barzan', en: 'Barzan', ar: 'برزان' },
        { key: 'al_zahra_hail', en: 'Al Zahra', ar: 'الزهراء' },
        { key: 'other_hail', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Najran
    {
      key: 'najran',
      en: 'Najran',
      ar: 'نجران',
      districts: [
        { key: 'al_faisaliyah_najran', en: 'Al Faisaliyah', ar: 'الفيصلية' },
        { key: 'al_fursan', en: 'Al Fursan', ar: 'الفرسان' },
        { key: 'al_okhudood', en: 'Al Okhudood', ar: 'الأخدود' },
        { key: 'al_shorfa', en: 'Al Shorfa', ar: 'الشرفة' },
        { key: 'aba_alsaud', en: 'Aba Al-Saud', ar: 'أبا السعود' },
        { key: 'other_najran', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Jazan
    {
      key: 'jazan',
      en: 'Jazan',
      ar: 'جازان',
      districts: [
        { key: 'al_matar', en: 'Al Matar', ar: 'المطار' },
        { key: 'al_shati_jazan', en: 'Al Shati', ar: 'الشاطئ' },
        { key: 'al_rawdah_jazan', en: 'Al Rawdah', ar: 'الروضة' },
        { key: 'al_safa_jazan', en: 'Al Safa', ar: 'الصفا' },
        { key: 'al_suwaidi', en: 'Al Suwaidi', ar: 'السويدي' },
        { key: 'other_jazan', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Al Qassim - Buraydah
    {
      key: 'buraydah',
      en: 'Buraydah',
      ar: 'بريدة',
      districts: [
        { key: 'al_fakhiriyah', en: 'Al Fakhiriyah', ar: 'الفاخرية' },
        { key: 'al_rawdah_bur', en: 'Al Rawdah', ar: 'الروضة' },
        { key: 'al_safra', en: 'Al Safra', ar: 'الصفراء' },
        { key: 'al_qadisiyah', en: 'Al Qadisiyah', ar: 'القادسية' },
        { key: 'al_naqaa', en: 'Al Naqaa', ar: 'النقعة' },
        { key: 'al_shamsiyah', en: 'Al Shamsiyah', ar: 'الشماسية' },
        { key: 'other_buraydah', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Unaizah
    {
      key: 'unaizah',
      en: 'Unaizah',
      ar: 'عنيزة',
      districts: [
        { key: 'al_andalus_una', en: 'Al Andalus', ar: 'الأندلس' },
        { key: 'al_iskan', en: 'Al Iskan', ar: 'الإسكان' },
        { key: 'al_rawdah_una', en: 'Al Rawdah', ar: 'الروضة' },
        { key: 'al_salihiyah', en: 'Al Salihiyah', ar: 'الصالحية' },
        { key: 'other_unaizah', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Al-Ahsa
    {
      key: 'al_ahsa',
      en: 'Al-Ahsa',
      ar: 'الأحساء',
      districts: [
        { key: 'al_hofuf', en: 'Al Hofuf', ar: 'الهفوف' },
        { key: 'al_mubarraz', en: 'Al Mubarraz', ar: 'المبرز' },
        { key: 'al_oyoon', en: 'Al Oyoon', ar: 'العيون' },
        { key: 'al_jafr', en: 'Al Jafr', ar: 'الجفر' },
        { key: 'al_taraf', en: 'Al Taraf', ar: 'الطرف' },
        { key: 'other_ahsa', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Jubail
    {
      key: 'jubail',
      en: 'Jubail',
      ar: 'الجبيل',
      districts: [
        { key: 'jubail_industrial', en: 'Jubail Industrial', ar: 'الجبيل الصناعية' },
        { key: 'jubail_balad', en: 'Jubail Al Balad', ar: 'الجبيل البلد' },
        { key: 'al_fanateer', en: 'Al Fanateer', ar: 'الفناتير' },
        { key: 'al_deffi', en: 'Al Deffi', ar: 'الدفي' },
        { key: 'other_jubail', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Yanbu
    {
      key: 'yanbu',
      en: 'Yanbu',
      ar: 'ينبع',
      districts: [
        { key: 'yanbu_industrial', en: 'Yanbu Industrial', ar: 'ينبع الصناعية' },
        { key: 'yanbu_bahr', en: 'Yanbu Al Bahr', ar: 'ينبع البحر' },
        { key: 'yanbu_nakhl', en: 'Yanbu Al Nakhl', ar: 'ينبع النخل' },
        { key: 'other_yanbu', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Khamis Mushait
    {
      key: 'khamis_mushait',
      en: 'Khamis Mushait',
      ar: 'خميس مشيط',
      districts: [
        { key: 'al_raqi', en: 'Al Raqi', ar: 'الراقي' },
        { key: 'al_muhammadiyah_khamis', en: 'Al Muhammadiyah', ar: 'المحمدية' },
        { key: 'al_nasim_khamis', en: 'Al Nasim', ar: 'النسيم' },
        { key: 'al_dhahran_khamis', en: 'Al Dhahran', ar: 'الظهران' },
        { key: 'other_khamis', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Qatif
    {
      key: 'qatif',
      en: 'Al Qatif',
      ar: 'القطيف',
      districts: [
        { key: 'safwa', en: 'Safwa', ar: 'صفوى' },
        { key: 'saihat', en: 'Saihat', ar: 'سيهات' },
        { key: 'tarout', en: 'Tarout', ar: 'تاروت' },
        { key: 'anak', en: 'Anak', ar: 'عنك' },
        { key: 'al_qatif_center', en: 'Al Qatif Center', ar: 'وسط القطيف' },
        { key: 'other_qatif', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Al Baha
    {
      key: 'al_baha',
      en: 'Al Baha',
      ar: 'الباحة',
      districts: [
        { key: 'al_aqiq_baha', en: 'Al Aqiq', ar: 'العقيق' },
        { key: 'al_makhwah', en: 'Al Makhwah', ar: 'المخواة' },
        { key: 'biljurashi', en: 'Biljurashi', ar: 'بلجرشي' },
        { key: 'al_mandaq', en: 'Al Mandaq', ar: 'المندق' },
        { key: 'other_baha', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Arar
    {
      key: 'arar',
      en: 'Arar',
      ar: 'عرعر',
      districts: [
        { key: 'al_faisaliyah_arar', en: 'Al Faisaliyah', ar: 'الفيصلية' },
        { key: 'al_rawdah_arar', en: 'Al Rawdah', ar: 'الروضة' },
        { key: 'al_khaldiyah_arar', en: 'Al Khaldiyah', ar: 'الخالدية' },
        { key: 'al_muhammadiyah_arar', en: 'Al Muhammadiyah', ar: 'المحمدية' },
        { key: 'other_arar', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Sakaka (Al Jouf)
    {
      key: 'sakaka',
      en: 'Sakaka',
      ar: 'سكاكا',
      districts: [
        { key: 'al_rawdah_sak', en: 'Al Rawdah', ar: 'الروضة' },
        { key: 'al_faisaliyah_sak', en: 'Al Faisaliyah', ar: 'الفيصلية' },
        { key: 'al_nahda_sak', en: 'Al Nahda', ar: 'النهضة' },
        { key: 'dumat_al_jandal', en: 'Dumat Al Jandal', ar: 'دومة الجندل' },
        { key: 'other_sakaka', en: 'Other', ar: 'أخرى' }
      ]
    },
    // Hafar Al-Batin
    {
      key: 'hafar_al_batin',
      en: 'Hafar Al-Batin',
      ar: 'حفر الباطن',
      districts: [
        { key: 'al_faisaliyah_hafar', en: 'Al Faisaliyah', ar: 'الفيصلية' },
        { key: 'al_khaldiyah_hafar', en: 'Al Khaldiyah', ar: 'الخالدية' },
        { key: 'al_andalus_hafar', en: 'Al Andalus', ar: 'الأندلس' },
        { key: 'al_rabwah_hafar', en: 'Al Rabwah', ar: 'الربوة' },
        { key: 'other_hafar', en: 'Other', ar: 'أخرى' }
      ]
    }
  ];

  getCities(): SaudiCity[] {
    return this.cities;
  }

  getCityByKey(cityKey: string): SaudiCity | undefined {
    return this.cities.find(c => c.key === cityKey);
  }

  getDistricts(cityKey: string): SaudiDistrict[] {
    const city = this.getCityByKey(cityKey);
    return city?.districts || [];
  }

  getCityName(cityKey: string, lang: 'en' | 'ar'): string {
    const city = this.getCityByKey(cityKey);
    return city ? (lang === 'ar' ? city.ar : city.en) : cityKey;
  }

  getDistrictName(cityKey: string, districtKey: string, lang: 'en' | 'ar'): string {
    const city = this.getCityByKey(cityKey);
    const district = city?.districts.find(d => d.key === districtKey);
    return district ? (lang === 'ar' ? district.ar : district.en) : districtKey;
  }
}
