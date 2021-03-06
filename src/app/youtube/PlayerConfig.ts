import { PlaybackQuality } from "./PlayerApi";

export declare interface PlayerConfig {
  url: string;
  attrs: {
    id: string,
    wmode: string
  };
  assets: {
    css: string,
    js: string
  };
  html5: boolean;
  params: {
    allowfullscreen: string,
    allowscriptaccess: string,
    bgcolor: string
  };
  sts: number;
  min_version: string;
  messages: {
    player_fallback: string[]
  };
  args: PlayerData;
  loaded: boolean;
}

export enum PlayerType {
  AD_UNIT ="adunit",
  DETAIL_PAGE = "detailpage",
  EDIT_PAGE = "editpage",
  EMBEDDED = "embedded",
  LEANBACK = "leanback",
  PREVIEW_PAGE = "previewpage",
  PROFILE_PAGE = "profilepage",
  UNPLUGGED = "unplugged"
}

export declare interface PlayerData {
  account_playback_token?: string;
  ad3_module?: string;
  ad_device?: string;
  ad_flags?: string;
  ad_logging_flag?: string;
  ad_preroll?: string;
  ad_slots?: string;
  ad_tag?: string;
  adaptive_fmts?: string;
  adsense_video_doc_id?: string;
  advideo?: string;
  afv?: boolean;
  afv_ad_tag?: string;
  allow_below_the_player_companion?: boolean;
  allow_embed?: string;
  allow_html5_ads?: string;
  allow_ratings?: string;
  apiary_host?: string;
  apiary_host_firstparty?: string;
  apply_fade_on_midrolls?: string;
  as_launched_in_country?: string;
  atc?: string;
  author?: string;
  authuser?: number;
  autoplay?: string;
  autoplayoverride?: string;
  avg_rating?: string;
  baseUrl?: string;
  c?: string;
  cafe_experiment_id?: string;
  cbr?: string;
  cbrver?: string;
  cid?: string;
  cl?: string;
  core_dbp?: string;
  cos?: string;
  cosver?: string;
  cr?: string;
  csi_page_type?: string;
  cver?: string;
  dbp?: string;
  dclk?: string;
  delay?: number;
  el?: PlayerType;
  enablecsi?: string;
  enabled_engage_types?: string;
  enablejsapi?: string;
  encoded_ad_safety_reason?: string;
  eventid?: string;
  excluded_ads?: string;
  external_play_video?: string;
  fade_in_duration_milliseconds?: string;
  fade_in_start_milliseconds?: string;
  fade_out_duration_milliseconds?: string;
  fade_out_start_milliseconds?: string;
  feature?: string;
  fexp?: string;
  fflags?: string;
  fmt_list?: string;
  focEnabled?: string;
  gapi_hint_params?: string;
  gpt_migration?: string;
  gut_tag?: string;
  hl?: string;
  host_language?: string;
  idpj?: string;
  innertube_api_key?: string;
  innertube_api_version?: string;
  innertube_context_client_version?: string;
  instream?: boolean;
  instream_long?: boolean;
  invideo?: boolean;
  is_listed?: string;
  ismb?: string;
  itct?: string;
  iv3_module?: string;
  iv_invideo_url?: string;
  iv_load_policy?: string;
  keywords?: string;
  ldpj?: string;
  length_seconds?: string;
  loaderUrl?: string;
  loeid?: string;
  loudness?: string;
  midroll_freqcap?: string;
  midroll_prefetch_size?: string;
  mpu?: boolean;
  mpvid?: string;
  mutedautoplay?: string;
  no_get_video_log?: string;
  of?: string;
  oid?: string;
  player_error_log_fraction?: string;
  player_response?: string;
  player_wide?: string;
  plid?: string;
  pltype?: string;
  ppv_remarketing_url?: string;
  probe_url?: string;
  ps?: string;
  ptchn?: string;
  ptk?: string;
  pyv_ad_channel?: string;
  referrer?: string;
  relative_loudness?: string;
  remarketing_url?: string;
  rmktEnabled?: string;
  sdetail?: string;
  sffb?: boolean;
  shortform?: boolean;
  show_content_thumbnail?: boolean;
  show_pyv_in_related?: boolean;
  sourceid?: string;
  ssl?: string;
  storyboard_spec?: string;
  swf_player_response?: string;
  t?: string;
  tag_for_child_directed?: boolean;
  thumbnail_url?: string;
  timestamp?: string;
  title?: string;
  tmi?: string;
  token?: string;
  trueview?: boolean;
  ucid?: string;
  uid?: string;
  url_encoded_fmt_stream_map?: string;
  user_age?: string;
  user_display_image?: string;
  user_display_name?: string;
  user_gender?: string;
  vid?: string;
  video_id?: string;
  videostats_playback_base_url?: string;
  view_count?: string;
  vm?: string;
  vmap?: string;
  vq?: PlaybackQuality;
  vss_host?: string;
  watch_ajax_token?: string;
  watermark?: string;
  xhr_apiary_host?: string;
  subscribed?: string;
}