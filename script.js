const DEFAULT_SONGS = [
	{
		title: "Elegie",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Elegie.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Elegie.jpg",
	},
	{
		title: "IDK",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/IDK.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/IDK.jpg",
	},
	{
		title: "Wtf Bby Im Lit",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Wtf Bby Im Lit.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Wtf Bby I_m Lit.jpg",
	},
	{
		title: "Anh Không Muốn Nó Dễ Dàng",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Anh Không Muốn Nó Dễ Dàng.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Anh Không Muốn Nó Dễ Dàng.jpg",
	},
	{
		title: "Baby",
		artist: "RPT MCK, marzuz",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Baby (feat. marzuz).mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Baby (feat. marzuz).jpg",
	},
	{
		title: "Yêu Anh Giết Anh",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Yêu Anh Giết Anh.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Yêu Anh Giết Anh.jpg",
	},
	{
		title: "Mắt Môi Tay Chân",
		artist: "RPT MCK, Tage",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Mắt Môi Tay Chân (feat. Tage).mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Mắt Môi Tay Chân (feat. Tage).jpg",
	},
	{
		title: "Đao Của Anh Vừa",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Đao Của Anh Vừa.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Đao Của Anh Vừa.jpg",
	},
	{
		title: "Là Gì Của Nhau",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Là Gì Của Nhau.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Là Gì Của Nhau.jpg",
	},
	{
		title: "Night In Prague",
		artist: "RPT MCK, Tùng Dương",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Night In Prague.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Night In Prague.jpg",
	},
	{
		title: "Một Cái Ôm",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Một Cái Ôm.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Một Cái Ôm.jpg",
	},
	{
		title: "Liệm",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Liệm.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Liệm.jpg",
	},
	{
		title: "Nếu Như Ta Chẳng Còn",
		artist: "RPT MCK, A$sAP Ướt Mi",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Nếu Như Ta Chẳng Còn (feat. AAP Ướt Mi).mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Nếu Như Ta Chẳng Còn (feat. AAP Ướt Mi).jpg",
	},
	{
		title: "Ai Mới Là Kẻ Xấu Xa",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Ai Mới Là Kẻ Xấu Xa.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Ai Mới Là Kẻ Xấu Xa.jpg",
	},
	{
		title: "Slippery",
		artist: "RPT MCK, Tùng Dương",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Slippery (feat. Tùng Dương).mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Slippery (feat. Tùng Dương).jpg",
	},
	{
		title: "Intenpol",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Intenpol.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Intenpol.jpg",
	},
	{
		title: "Tây Thi",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Tây Thi.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Tây Thi.jpg",
	},
	{
		title: "Hút và Hút",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Hút và Hút.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Hút và Hút.jpg",
	},
	{
		title: "Dưa Chua",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Dưa Chua.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Dưa Chua.jpg",
	},
	{
		title: "Xa Xôi",
		artist: "RPT MCK, Obito",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Xa Xôi (feat. Obito).mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Xa Xôi (feat. Obito).jpg",
	},
	{
		title: "Che Phủ",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Che Phủ.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Che Phủ.jpg",
	},
	{
		title: "Oanh M = Thuoc",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Oanh M Thuoc.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Oanh M = Thuoc.jpg",
	},
	{
		title: "Ghet Xog Lai Thik",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Ghet Xog Lai Thik.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Ghet Xog Lai Thik.jpg",
	},
	{
		title: "Nhìn Kẻ Thù Của Tao",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Nhìn Kẻ Thù Của Tao.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Nhìn Kẻ Thù Của Tao.jpg",
	},
	{
		title: "Envy",
		artist: "RPT MCK, THANHDRAW",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Envy (feat. THANHDRAW).mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Envy (feat. THANHDRAW).jpg",
	},
	{
		title: "Cảm Ơn",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Cảm Ơn.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Cảm Ơn.jpg",
	},
	{
		title: "Không Cần Lo Cho Tao",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Không Cần Lo Cho Tao.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Không Cần Lo Cho Tao.jpg",
	},
	{
		title: "Huh",
		artist: "RPT MCK, RPT Orijinn, THANHDRAW",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Huh (feat. RPT Orijinn & THANHDRAW).mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Huh (feat. RPT Orijinn & THANHDRAW).jpg",
	},
	{
		title: "Nguyễn Văn Mười",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Nguyễn Văn Mười.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Nguyễn Văn Mười.jpg",
	},
	{
		title: "Thịt Lợn",
		artist: "RPT MCK",
		album: "HVL",
		src: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Sound/Thịt Lợn.mp3",
		cover: "https://pub-764ca88838bc4004853f7e3c2f054883.r2.dev/Image/Thịt Lợn.jpg",
	},
];

class MusicPlayer {
	constructor() {
		this.songs = [];
		this.currentIndex = 0;
		this.isPlaying = false;
		this.isShuffle = false;
		this.repeatMode = 0; 
		this.playbackSpeed = 1.0;
		this.currentPage = 1;
		this.itemsPerPage = 10;
		this.currentFilteredSongs = [];

		this.audio = document.getElementById("audio-player");
		this.songListContainer = document.getElementById("song-list-container");
		this.paginationBar = document.getElementById("pagination-bar");
		this.songCountBadge = document.getElementById("song-count");
		this.searchInput = document.getElementById("search-input");
		this.btnInfo = document.getElementById("btn-info");
		this.infoModal = document.getElementById("info-modal");
		this.btnModalClose = document.getElementById("btn-modal-close");

		this.currentCover = document.getElementById("current-cover");
		this.currentTitle = document.getElementById("current-title");
		this.currentArtist = document.getElementById("current-artist");

		this.albumHero = document.getElementById("album-hero");
		this.btnPlayMain = document.getElementById("btn-play-main");
		this.playIcon = document.getElementById("play-icon");

		this.btnPrev = document.getElementById("btn-prev");
		this.btnNext = document.getElementById("btn-next");
		this.btnShuffle = document.getElementById("btn-shuffle");
		this.btnRepeat = document.getElementById("btn-repeat");

		this.timeCurrent = document.getElementById("time-current");
		this.timeDuration = document.getElementById("time-duration");
		this.progressBarWrapper = document.getElementById("progress-bar-wrapper");
		this.progressBarFill = document.getElementById("progress-bar-fill");

		this.volumeSlider = document.getElementById("volume-slider");
		this.btnMute = document.getElementById("btn-mute");
		this.volumeIcon = document.getElementById("volume-icon");

		const savedVolume = localStorage.getItem("music_volume");
		this.currentVolume = savedVolume !== null ? parseFloat(savedVolume) : 0.8;
		this.isMuted = localStorage.getItem("music_muted") === "true";

		this.init();
	}

	init() {
		this.setupEventListeners();
		this.initVolumeSettings();
		this.loadSongs();

		if (this.songs.length > 0) {
			const savedTrackIdx = localStorage.getItem("music_last_track");
			const savedTime = localStorage.getItem("music_last_time");

			if (
				savedTrackIdx !== null &&
				!isNaN(parseInt(savedTrackIdx, 10)) &&
				parseInt(savedTrackIdx, 10) < this.songs.length
			) {
				this.currentIndex = parseInt(savedTrackIdx, 10);
			} else {
				this.currentIndex = 0;
			}

			this.loadTrack(this.currentIndex);

			if (savedTime !== null && !isNaN(parseFloat(savedTime))) {
				const targetTime = parseFloat(savedTime);
				const restoreTimeHandler = () => {
					if (!isNaN(this.audio.duration) && this.audio.duration > 0) {
						this.audio.currentTime = targetTime;
						const pct = (targetTime / this.audio.duration) * 100;
						this.progressBarFill.style.width = `${pct}%`;
						this.timeCurrent.textContent = this.formatTime(targetTime);
						this.timeDuration.textContent = this.formatTime(this.audio.duration);
					}
				};
				this.audio.addEventListener("loadedmetadata", restoreTimeHandler, { once: true });
			}
		}
	}

	initVolumeSettings() {
		this.audio.volume = this.currentVolume;
		this.audio.muted = this.isMuted;
		if (this.volumeSlider) {
			this.volumeSlider.value = this.currentVolume;
		}
		this.updateMuteUI();
	}

	updateMuteUI() {
		if (this.btnMute) {
			this.btnMute.classList.toggle("active", this.isMuted);
		}
		if (this.volumeIcon) {
			if (this.isMuted) {
				this.volumeIcon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" stroke-width="2"></line><line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" stroke-width="2"></line>`;
			} else {
				this.volumeIcon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>`;
			}
		}
	}

	loadSongs() {
		const customSongs = JSON.parse(
			localStorage.getItem("music_custom_songs") || "[]",
		);
		this.songs = [...DEFAULT_SONGS, ...customSongs];
		this.renderSongList(this.songs);
		this.preloadDurations();
	}

	preloadDurations() {
		this.songs.forEach((song, idx) => {
			if (!song.duration || song.duration === "--:--") {
				const tempAudio = new Audio();
				tempAudio.src = song.src;
				tempAudio.addEventListener("loadedmetadata", () => {
					if (!isNaN(tempAudio.duration) && tempAudio.duration > 0) {
						song.duration = this.formatTime(tempAudio.duration);
						const itemDuration = document.querySelector(
							`.song-item[data-index="${idx}"] .song-length`,
						);
						if (itemDuration) itemDuration.textContent = song.duration;
						if (idx === this.currentIndex) {
							this.timeDuration.textContent = song.duration;
						}
					}
				});
			}
		});
	}

	renderSongList(list = this.songs, targetPage = null) {
		this.currentFilteredSongs = list;
		const totalSongs = list.length;
		const totalPages = Math.ceil(totalSongs / this.itemsPerPage) || 1;

		if (targetPage !== null) {
			this.currentPage = targetPage;
		}
		if (this.currentPage > totalPages) this.currentPage = totalPages;
		if (this.currentPage < 1) this.currentPage = 1;

		this.songCountBadge.textContent = `${totalSongs} bài hát`;
		this.songListContainer.innerHTML = "";

		const startIndex = (this.currentPage - 1) * this.itemsPerPage;
		const pageSongs = list.slice(startIndex, startIndex + this.itemsPerPage);

		pageSongs.forEach((song) => {
			const originalIndex = this.songs.findIndex((s) => s.src === song.src);
			const isActive = originalIndex === this.currentIndex;

			const itemEl = document.createElement("div");
			itemEl.className = `song-item ${isActive ? "active" : ""}`;
			itemEl.setAttribute("data-index", originalIndex);

			itemEl.innerHTML = `
				<div class="song-thumb-wrapper">
					<img src="${song.cover}" alt="${song.title}" class="song-thumb">
					<div class="song-thumb-overlay">
						${isActive && this.isPlaying
					? `
							<div class="eq-bars">
								<div class="eq-bar"></div>
								<div class="eq-bar"></div>
								<div class="eq-bar"></div>
							</div>
						`
					: `
							<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
						`
				}
					</div>
				</div>

				<div class="song-info">
					<div class="song-name">${song.title}</div>
					<div class="song-author">${song.artist}</div>
				</div>

				<div class="song-meta">
					<span class="song-length">${song.duration || "03:00"}</span>
				</div>
			`;

			itemEl.addEventListener("click", (e) => {
				this.currentIndex = originalIndex;
				this.loadTrack(this.currentIndex);
				this.playTrack();
			});

			this.songListContainer.appendChild(itemEl);
		});

		this.renderPagination(totalSongs, totalPages);
	}

	renderPagination(totalItems, totalPages) {
		if (!this.paginationBar) return;
		if (totalPages <= 1) {
			this.paginationBar.style.display = "none";
			return;
		}

		this.paginationBar.style.display = "flex";
		const startItem = (this.currentPage - 1) * this.itemsPerPage + 1;
		const endItem = Math.min(this.currentPage * this.itemsPerPage, totalItems);

		let numButtonsHtml = "";
		for (let p = 1; p <= totalPages; p++) {
			numButtonsHtml += `<button class="page-num ${p === this.currentPage ? "active" : ""}" data-page="${p}">${p}</button>`;
		}

		this.paginationBar.innerHTML = `
			<span class="page-info-text">${startItem}-${endItem} / ${totalItems} bài</span>
			<div class="page-controls">
				<button class="page-btn prev-btn" ${this.currentPage === 1 ? "disabled" : ""}>
					‹ Trước
				</button>
				<div class="page-numbers">${numButtonsHtml}</div>
				<button class="page-btn next-btn" ${this.currentPage === totalPages ? "disabled" : ""}>
					Sau ›
				</button>
			</div>
		`;

		const prevBtn = this.paginationBar.querySelector(".prev-btn");
		const nextBtn = this.paginationBar.querySelector(".next-btn");
		const numBtns = this.paginationBar.querySelectorAll(".page-num");

		if (prevBtn) {
			prevBtn.addEventListener("click", () => {
				if (this.currentPage > 1) {
					this.renderSongList(this.currentFilteredSongs, this.currentPage - 1);
				}
			});
		}

		if (nextBtn) {
			nextBtn.addEventListener("click", () => {
				if (this.currentPage < totalPages) {
					this.renderSongList(this.currentFilteredSongs, this.currentPage + 1);
				}
			});
		}

		numBtns.forEach((btn) => {
			btn.addEventListener("click", () => {
				const p = parseInt(btn.getAttribute("data-page"), 10);
				this.renderSongList(this.currentFilteredSongs, p);
			});
		});
	}

	loadTrack(index) {
		if (index < 0 || index >= this.songs.length) return;
		const track = this.songs[index];

		localStorage.setItem("music_last_track", index);

		const targetPage = Math.floor(index / this.itemsPerPage) + 1;
		if (targetPage !== this.currentPage) {
			this.currentPage = targetPage;
		}

		if (this.audio) this.audio.src = encodeURI(track.src);
		if (this.currentTitle) this.currentTitle.textContent = track.title;
		if (this.currentArtist) this.currentArtist.textContent = track.artist;
		if (this.currentCover) this.currentCover.src = track.cover;

		this.renderSongList(this.songs);

		if (this.progressBarFill) this.progressBarFill.style.width = "0%";
		if (this.timeCurrent) this.timeCurrent.textContent = "00:00";
		if (this.timeDuration) this.timeDuration.textContent = track.duration || "00:00";
	}

	playTrack() {
		this.audio.playbackRate = this.playbackSpeed;
		this.audio
			.play()
			.then(() => {
				this.isPlaying = true;
				this.albumHero.classList.add("isPlaying");
				this.updatePlayIcon();
				this.renderSongList(this.songs);
			})
			.catch((err) => {
				console.log("Autoplay deferred or audio load error:", err);
			});
	}

	pauseTrack() {
		this.audio.pause();
		this.isPlaying = false;
		this.albumHero.classList.remove("isPlaying");
		this.updatePlayIcon();
		this.renderSongList(this.songs);
	}

	togglePlay() {
		if (this.isPlaying) {
			this.pauseTrack();
		} else {
			this.playTrack();
		}
	}

	updatePlayIcon() {
		if (this.isPlaying) {
			this.playIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>`;
		} else {
			this.playIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
		}
	}

	nextTrack() {
		if (this.isShuffle) {
			this.currentIndex = Math.floor(Math.random() * this.songs.length);
		} else {
			this.currentIndex = (this.currentIndex + 1) % this.songs.length;
		}
		this.loadTrack(this.currentIndex);
		this.playTrack();
	}

	prevTrack() {
		if (this.isShuffle) {
			this.currentIndex = Math.floor(Math.random() * this.songs.length);
		} else {
			this.currentIndex =
				(this.currentIndex - 1 + this.songs.length) % this.songs.length;
		}
		this.loadTrack(this.currentIndex);
		this.playTrack();
	}

	setupEventListeners() {
		if (this.btnPlayMain) this.btnPlayMain.addEventListener("click", () => this.togglePlay());
		if (this.btnNext) this.btnNext.addEventListener("click", () => this.nextTrack());
		if (this.btnPrev) this.btnPrev.addEventListener("click", () => this.prevTrack());

		if (this.btnShuffle) {
			this.btnShuffle.addEventListener("click", () => {
				this.isShuffle = !this.isShuffle;
				this.btnShuffle.classList.toggle("active", this.isShuffle);
			});
		}

		if (this.btnRepeat) {
			this.btnRepeat.addEventListener("click", () => {
				this.repeatMode = (this.repeatMode + 1) % 3; 
				this.btnRepeat.classList.remove("active", "repeat-playlist", "repeat-one");

				if (this.repeatMode === 0) {
					this.btnRepeat.title = "Lặp lại: Tắt";
				} else if (this.repeatMode === 1) {
					this.btnRepeat.classList.add("active", "repeat-playlist");
					this.btnRepeat.title = "Lặp lại: Danh sách phát";
				} else {
					this.btnRepeat.classList.add("active", "repeat-one");
					this.btnRepeat.title = "Lặp lại: 1 bài";
				}
			});
		}

		if (this.audio) {
			this.audio.addEventListener("loadedmetadata", () => {
				if (!isNaN(this.audio.duration) && this.audio.duration > 0) {
					if (this.timeDuration) this.timeDuration.textContent = this.formatTime(this.audio.duration);
				}
			});

			this.audio.addEventListener("timeupdate", () => {
				if (!isNaN(this.audio.duration) && this.audio.duration > 0) {
					const pct = (this.audio.currentTime / this.audio.duration) * 100;
					if (this.progressBarFill) this.progressBarFill.style.width = `${pct}%`;
					if (this.timeCurrent) this.timeCurrent.textContent = this.formatTime(this.audio.currentTime);
					if (this.timeDuration) this.timeDuration.textContent = this.formatTime(this.audio.duration);
					localStorage.setItem("music_last_time", this.audio.currentTime);
				}
			});

			this.audio.addEventListener("ended", () => {
				if (this.repeatMode === 2) {
					this.playTrack();
				} else {
					this.nextTrack();
				}
			});
		}

		if (this.progressBarWrapper) {
			this.progressBarWrapper.addEventListener("click", (e) => {
				const rect = this.progressBarWrapper.getBoundingClientRect();
				const clickX = e.clientX - rect.left;
				const width = rect.width;
				if (this.audio && this.audio.duration) {
					this.audio.currentTime = (clickX / width) * this.audio.duration;
				}
			});
		}

		if (this.volumeSlider) {
			this.volumeSlider.addEventListener("input", (e) => {
				const val = parseFloat(e.target.value);
				if (this.audio) this.audio.volume = val;
				this.currentVolume = val;
				localStorage.setItem("music_volume", val);
				if (this.audio && this.audio.muted) {
					this.audio.muted = false;
					this.isMuted = false;
					localStorage.setItem("music_muted", "false");
					this.updateMuteUI();
				}
			});
		}

		if (this.btnMute) {
			this.btnMute.addEventListener("click", () => {
				if (this.audio) this.audio.muted = !this.audio.muted;
				this.isMuted = this.audio ? this.audio.muted : false;
				localStorage.setItem("music_muted", this.isMuted);
				this.updateMuteUI();
			});
		}

		if (this.searchInput) {
			this.searchInput.addEventListener("input", (e) => {
				const query = e.target.value.toLowerCase().trim();
				const filtered = this.songs.filter(
					(s) =>
						s.title.toLowerCase().includes(query) ||
						s.artist.toLowerCase().includes(query),
				);
				this.renderSongList(filtered, 1);
			});
		}

		if (this.btnInfo && this.infoModal) {
			this.btnInfo.addEventListener("click", () => {
				this.infoModal.classList.add("active");
			});
		}

		if (this.btnModalClose && this.infoModal) {
			this.btnModalClose.addEventListener("click", () => {
				this.infoModal.classList.remove("active");
			});
		}

		if (this.infoModal) {
			this.infoModal.addEventListener("click", (e) => {
				if (e.target === this.infoModal) {
					this.infoModal.classList.remove("active");
				}
			});
		}

		document.addEventListener("keydown", (e) => {
			if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
				return;
			if (e.code === "Space") {
				e.preventDefault();
				this.togglePlay();
			} else if (e.code === "ArrowRight") {
				this.audio.currentTime = Math.min(
					this.audio.duration || 0,
					this.audio.currentTime + 5,
				);
			} else if (e.code === "ArrowLeft") {
				this.audio.currentTime = Math.max(0, this.audio.currentTime - 5);
			}
		});
	}

	formatTime(secs) {
		const m = Math.floor(secs / 60);
		const s = Math.floor(secs % 60);
		return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
	}
}

document.addEventListener("DOMContentLoaded", () => {
	window.player = new MusicPlayer();
});
