/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 * 
 * @author mebjas <minhazav@gmail.com>
 * 
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

/**
 * Strings used in {@class Html5Qrcode}.
 * 
 * TODO(mebjas): Support internalization.
 */

/**
 * Modifyed By zeratulspc 2025-04-15
 * translated to Korean
 */
export class Html5QrcodeStrings {

    public static codeParseError(exception: any): string {
        return `QR 코드 파싱 오류, 오류 = ${exception}`;
    }

    public static errorGettingUserMedia(error: any): string {
        return `userMedia 가져오기 오류, 오류 = ${error}`;
    }

    public static onlyDeviceSupportedError(): string {
        return "이 장치는 navigator.mediaDevices를 지원하지 않습니다. 이 경우 지원되는 cameraIdOrConfig는 deviceId 매개변수(문자열)뿐입니다.";
    }

    public static cameraStreamingNotSupported(): string {
        return "브라우저에서 카메라 스트리밍을 지원하지 않습니다.";
    }

    public static unableToQuerySupportedDevices(): string {
        return "지원되는 장치를 쿼리할 수 없습니다. 알 수 없는 오류입니다.";
    }

    public static insecureContextCameraQueryError(): string {
        return "카메라 액세스는 https 또는 localhost와 같은 보안 컨텍스트에서만 지원됩니다.";
    }

    public static scannerPaused(): string {
        return "스캐너가 일시 중지되었습니다.";
    }
}

/**
 * Strings used in {@class Html5QrcodeScanner}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeScannerStrings {

    public static scanningStatus(): string {
        return "스캔 중";
    }

    public static idleStatus(): string {
        return "대기 중";
    }

    public static errorStatus(): string {
        return "오류";
    }

    public static permissionStatus(): string {
        return "권한";
    }

    public static noCameraFoundErrorStatus(): string {
        return "카메라를 찾을 수 없음";
    }

    public static lastMatch(decodedText: string): string {
        return `마지막 매칭: ${decodedText}`;
    }

    public static codeScannerTitle(): string {
        return "코드 스캐너";
    }

    public static cameraPermissionTitle(): string {
        return "카메라 권한 요청";
    }

    public static cameraPermissionRequesting(): string {
        return "카메라 권한 요청 중...";
    }

    public static noCameraFound(): string {
        return "카메라를 찾을 수 없습니다.";
    }

    public static scanButtonStopScanningText(): string {
        return "스캔 중지";
    }

    public static scanButtonStartScanningText(): string {
        return "스캔 시작";
    }

    public static torchOnButton(): string {
        return "손전등 켜기";
    }

    public static torchOffButton(): string {
        return "손전등 끄기";
    }

    public static torchOnFailedMessage(): string {
        return "손전등을 켜는 데 실패했습니다.";
    }

    public static torchOffFailedMessage(): string {
        return "손전등을 끄는 데 실패했습니다.";
    }

    public static scanButtonScanningStarting(): string {
        return "카메라 실행 중";
    }

    /**
     * Text to show when camera scan is selected.
     * 
     * This will be used to switch to file based scanning.
     */
    public static textIfCameraScanSelected(): string {
        return "이미지 파일 스캔";
    }

    /**
     * Text to show when file based scan is selected.
     * 
     * This will be used to switch to camera based scanning.
     */
    public static textIfFileScanSelected(): string {
        return "카메라를 사용하여 직접 스캔";
    }

    public static selectCamera(): string {
        return "카메라 선택";
    }

    public static fileSelectionChooseImage(): string {
        return "이미지 선택";
    }

    public static fileSelectionChooseAnother(): string {
        return "다른 이미지 선택";
    }

    public static fileSelectionNoImageSelected(): string {
        return "선택된 이미지 없음";
    }

    /** Prefix to be given to anonymous cameras. */
    public static anonymousCameraPrefix(): string {
        return "익명 카메라";
    }

    public static dragAndDropMessage(): string {
        return "또는 이미지를 드롭하여 스캔";
    }

    public static dragAndDropMessageOnlyImages(): string {
        return "또는 이미지를 드롭하여 스캔 (다른 파일은 지원되지 않음)";
    }

    /** Value for zoom. */
    public static zoom(): string {
        return "줌";
    }

    public static loadingImage(): string {
        return "이미지 로딩 중...";
    }

    public static cameraScanAltText(): string {
        return "카메라 기반 스캔";
    }

    public static fileScanAltText(): string {
        return "파일 기반 스캔";
    }
}

/** Strings used in {@class LibraryInfoDiv} */
export class LibraryInfoStrings {

    public static poweredBy(): string {
        return "제공: ";
    }

    public static reportIssues(): string {
        return "문제 보고";
    }
}
